import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { endpoints, colors } from "../../constants"

import PageHeader from "../../components/PageHeader/PageHeader";
import CelestialObjectCardsContainer from "../../components/CelestialObjectCardsContainer/CelestialObjectCardsContainer";
import CelestialObjectCard from "../../components/CelestialObjectCard/CelestialObjectCard"

import {
  StyledPageHeaderLoadingBox,
  StyledCelestialObjectLoadingBox,
  StyledCelestialObjectSection,
  StyledInformationLoadingBox,
  StyledCelestialObject,
  StyledCelestialObjectInformation,
  StyledMoonsSection
} from "./StyledBody";

const BodyPage = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState(null);
  const params = useParams();

  const fetchAndSetData = async () => {
    setIsLoading(true);

    try {
      const data = await fetch(`${endpoints.bodies}/${params.id}`).then(res => res.json());
      setData(data);

    } catch (err) {
      setData(null);
      console.error(err);
    
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAndSetData();

    // Cleanup
    return () => {
      setIsLoading(true);
      setData(null);
    }
  }, [params.id])

  if (isLoading) return (
    <>
      <PageHeader>
        <StyledPageHeaderLoadingBox />
      </PageHeader>

      <StyledCelestialObjectSection>
        <StyledCelestialObjectLoadingBox />
        <StyledInformationLoadingBox />
      </StyledCelestialObjectSection>
    </>
  )

  if (!data) return (
    <>
      <PageHeader title="Error" />
      <article>
        <p>Unable to find celestial body with the ID "{params.id}".</p>
      </article>
    </>
  )

  return (
    <>
      <PageHeader title={data.name + (data.englishName && ` (${data.englishName})`)} />
      
      <StyledCelestialObjectSection>
        <StyledCelestialObject color={colors?.[data.id] || colors.moon} />
        <StyledCelestialObjectInformation data={data} />
      </StyledCelestialObjectSection>

      {data.moons && <StyledMoonsSection>
        <h2>Moons</h2>
        <CelestialObjectCardsContainer>
          {data.moons.map(moon => {
            const id = moon.rel.match(/\w+$/)?.[0]
            return (<CelestialObjectCard key={id} id={id} name={moon.moon} to={`/body/${id}`}/>)
        })}
        </CelestialObjectCardsContainer>
      </StyledMoonsSection>}
    </>
  )
}

export default BodyPage;
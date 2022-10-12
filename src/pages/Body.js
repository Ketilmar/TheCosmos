import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { endpoints, colors } from '../constants'

import PageHeader from '../components/PageHeader/PageHeader'
import CelestialObjectCardsContainer from '../components/CelestialObjectCardsContainer/CelestialObjectCardsContainer'
import CelestialObjectCard from '../components/CelestialObjectCard/CelestialObjectCard'
import CelestialObject from '../components/CelestialObject/CelestialObject'
import CelestialObjectInformation from '../components/CelestialObjectInformation/CelestialObjectInformation'
import LoadingBox from '../components/LoadingBox/LoadingBox'

const BodyPage = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ data, setData ] = useState(null)
  const params = useParams()

  const fetchAndSetData = async () => {
    setIsLoading(true)

    try {
      const data = await fetch(`${endpoints.bodies}/${params.id}`).then(res => res.json())
      setData(data)

    } catch (err) {
      setData(null)
      console.error(err)
    
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAndSetData()

    // Cleanup
    return () => {
      setIsLoading(true)
      setData(null)
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
      <PageHeader title={data.englishName || 'Unknown'} />
      
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

const StyledPageHeaderLoadingBox = styled(LoadingBox)`
  height: 5rem;
`

const StyledCelestialObjectLoadingBox = styled(LoadingBox)`
  aspect-ratio: 1;
  border-radius: 50%;

  @media (min-width: 48em) {
    max-width: 40%;
  }
`

const StyledInformationLoadingBox = styled(LoadingBox)`
  height: 30em;

  @media (min-width: 48em) {
    max-width: 50%;
  }
`

const StyledCelestialObjectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-block: 2em;

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const StyledCelestialObject = styled(CelestialObject)`
  @media (min-width: 48em) {
    max-width: 40%;
  }
`

const StyledCelestialObjectInformation = styled(CelestialObjectInformation)`
  @media (min-width: 48em) {
    min-width: 50%;
  }
`

const StyledMoonsSection = styled.section`
  padding-block: 2em;
  
  h2 {
    font-size: 1.4rem;
    margin-block: 4em 1em;
  }

  @media (min-width: 48em) {
    h2 {
      font-size: 2rem;
    }
  }
`

export default BodyPage
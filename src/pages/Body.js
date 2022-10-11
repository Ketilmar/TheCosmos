import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { endpoints, colors } from '../constants'

import CelestialObjectSection from '../components/CelestialObjectSection'
import CelestialObjectCard from '../components/CelestialObjectCard'

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
      <h1>{params.id}</h1>
      <p>Loading...</p>
    </>
  )

  if (!data) return (
    <>
      <h1>{params.id}</h1>
      <p>Unable to find celestial body with ID: {params.id}</p>
    </>
  )

  return (
    <>
      <h1>{data.englishName || 'Unknown'}</h1>
      <CelestialObjectSection data={data} color={colors?.[data.id] || colors.moon} />
      {data.moons && <StyledMoonsSection>
        <h2>Moons</h2>
        <StyledMoonCardsContainer>
          {data.moons.map(moon => {
            const id = moon.rel.match(/\w+$/)?.[0]
            return (<CelestialObjectCard key={id} id={id} name={moon.moon} to={`/body/${id}`}/>)
          })}
        </StyledMoonCardsContainer>
      </StyledMoonsSection>}
    </>
  )
}

const StyledMoonsSection = styled.section``

const StyledMoonCardsContainer = styled.div`
  display: flex;
  gap: 1em;
  overflow-x: auto;

  > * {
    min-width: 20em;
  }

  @media (min-width: 48em) {
    overflow-x: initial;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 100%));
  }

  @media (min-width: 64em) {
    grid-template-columns: repeat(3, minmax(0, 100%));
  }
`

export default BodyPage
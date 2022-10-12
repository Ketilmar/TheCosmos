import styled from 'styled-components'

import { planets } from '../constants'

import PageHeader from '../components/PageHeader'
import CelestialObjectCard from '../components/CelestialObjectCard'

const Planets = () => (
  <>
    <PageHeader title="Planets"/>
    <StyledPlanetsSection>
      {planets.map((planet) => (
        <StyledCelestialObjectCard
          color={planet.color}
          name={planet.name}
          to={`/body/${planet.id}`}
        />
      ))}
    </StyledPlanetsSection>
  </>
)

const StyledPlanetsSection = styled.section`
  display: flex;
  gap: 1em;
  padding-block: 2em;
  overflow-x: auto;

  @media (min-width: 26em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow-x: initial;
  }

  @media (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 56em) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const StyledCelestialObjectCard = styled(CelestialObjectCard)`
  min-width: 14em;

  @media (min-width: 26em) {
    min-width: initial;
  }
`

export default Planets
import styled from 'styled-components'

import CelestialObject from './CelestialObject'
import CelestialObjectInformation from './CelestialObjectInformation'

const CelestialObjectSection = ({ data, color }) => (
  <StyledSection>
    <StyledCelestialObject color={color} />
    <StyledCelestialObjectInformation data={data} />
  </StyledSection>
)

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;

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

export default CelestialObjectSection
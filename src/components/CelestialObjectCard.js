import styled from 'styled-components'

import CelestialObject from './CelestialObject'
import Button from './Button/Button'

const CelestialObjectCard = ({
  className,
  color,
  name,
  to
}) => (
  <StyledCard className={className}>
    <StyledCelestialObject color={color}/>
    <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledDescription>
    <StyledButton to={to || '/'}>{name}</StyledButton>
  </StyledCard>
)

const StyledCard = styled.div`
  background-color: #141823;
  padding: 2em;
  display: flex;
  flex-direction: column;
  border-radius: .5em;
  align-items: center;
`

const StyledCelestialObject = styled(CelestialObject)`
  width: 60%;
`

const StyledDescription = styled.p`
  text-align: center;
  color: #FFFFFF;
  padding-block: .5em 2em;
  font-weight: 300;
`

const StyledButton = styled(Button)`
  min-width: 80%;
`

export default CelestialObjectCard
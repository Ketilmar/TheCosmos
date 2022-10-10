import styled from 'styled-components'

const CelestialObject = ({ className, color = '#A7A7A7' }) => (
  <StyledCelestialObject className={className} startColor={color} endColor="#0F131F" />
)

const StyledCelestialObject = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${props => props.startColor};
  background: linear-gradient(
    45deg,
    ${props => props.endColor} 0%,
    ${props => props.startColor} 100%
  );
`

export default CelestialObject
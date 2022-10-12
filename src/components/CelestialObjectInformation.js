import styled from 'styled-components'

const CelestialObjectInformation = ({ className, data }) => (
  <StyledInformationContainer className={className}>
    <StyledHeading>Information</StyledHeading>
    
    <b>Discovered by:</b>
    <span>{data.discoveredBy || 'Unknown'}</span>

    <b>Discovery date:</b>
    <span>{data.discoveryDate || 'Unknown'}</span>

    <b>Avg temp:</b>
    <span>{data.avgTemp} K</span>
    
    <b>Dimension:</b>
    <span>{data.dimension ? `${data.dimension} Km` : 'Unknown'}</span>
    
    <b>Mass:</b>
    <span>{data.mass ? `${data.mass.massValue.toLocaleString()} x 10^${data.mass.massExponent} Kg` : 'Unknown'}</span>
    
    <b>Volume:</b>
    <span>{data.vol ? `${data.vol.volValue.toLocaleString()} x 10^${data.vol.volExponent} Km3` : 'Unknown'}</span>

    <b>Density:</b>
    <span>{data.density.toLocaleString()} g.cm3</span>
    
    <b>Gravity:</b>
    <span>{data.gravity} m.s-2</span>
    
    <b>Radius:</b>
    <span>{data.meanRadius.toLocaleString()} Km</span>
    
    <b>Semimajor axis:</b>
    <span>{data.semimajorAxis.toLocaleString()} Km</span>
    
    <b>Perihelion:</b>
    <span>{data.perihelion.toLocaleString()} Km</span>
    
    <b>Aphelion:</b>
    <span>{data.aphelion.toLocaleString()} Km</span>
    
    <b>Inclination:</b>
    <span>{data.inclination}°</span> 
  </StyledInformationContainer>
)

const StyledInformationContainer = styled.div`
  background-color: #141823;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-radius: 1em;

  > *:nth-child(odd):not(:first-child):not(:last-child) {
    margin-block-end: 1em;
  }

  b {
    font-weight: 600;
  }

  span {
    font-weight: 300;
  }

  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;

    > *:nth-child(odd):not(:first-child):not(:last-child) {
      margin: 0;
    }

    span {
      text-align: right;
    }
  }

  @media (min-width: 64em) {
    padding: 2em;
  }
`

const StyledHeading = styled.h3`
  margin-block: 0 1em;

  @media (min-width: 48em) {
    grid-column: 1 / 3;
  }
`

export default CelestialObjectInformation
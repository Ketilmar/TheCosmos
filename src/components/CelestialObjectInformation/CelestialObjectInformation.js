import {
  StyledInformationContainer,
  StyledHeading
} from "./StyledCelestialObjectInformation";

const formatDate = (input) => {
  try {
    const [ _input, d, m, y ] = input.match(/(\d+)\/(\d+)\/(\d+)/);
    const date = new Date(y, m, d);
    return date.toLocaleDateString(undefined, {dateStyle: "long"});
  
  } catch (err) {
    return "Unknown";
  }
}

const CelestialObjectInformation = ({ className, data }) => (
  <StyledInformationContainer className={className}>
    <StyledHeading>Information</StyledHeading>
    
    <b>Discovered by:</b>
    <span>{data.discoveredBy || 'Unknown'}</span>

    <b>Discovery date:</b>
    <span>{formatDate(data.discoveryDate)}</span>

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
);

export default CelestialObjectInformation;
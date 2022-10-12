import styled from "styled-components";

import CelestialObject from "../../components/CelestialObject/CelestialObject";
import CelestialObjectInformation from "../../components/CelestialObjectInformation/CelestialObjectInformation";
import LoadingBox from "../../components/LoadingBox/LoadingBox";

export const StyledPageHeaderLoadingBox = styled(LoadingBox)`
  height: 5rem;
`;

export const StyledCelestialObjectLoadingBox = styled(LoadingBox)`
  aspect-ratio: 1;
  border-radius: 50%;

  @media (min-width: 48em) {
    max-width: 40%;
  }
`;

export const StyledInformationLoadingBox = styled(LoadingBox)`
  height: 30em;

  @media (min-width: 48em) {
    max-width: 50%;
  }
`;

export const StyledCelestialObjectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-block: 2em 10em;

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledCelestialObject = styled(CelestialObject)`
  @media (min-width: 48em) {
    max-width: 40%;
  }
`;

export const StyledCelestialObjectInformation = styled(CelestialObjectInformation)`
  @media (min-width: 48em) {
    min-width: 50%;
  }
`;

export const StyledMoonsSection = styled.section`
  margin-block: 2em 10em;
  
  h2 {
    font-size: 1.4rem;
    margin-block: 4em 1em;
  }

  @media (min-width: 48em) {
    h2 {
      font-size: 2rem;
    }
  }
`;
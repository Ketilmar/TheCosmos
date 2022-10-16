import { planets } from "../../constants";

import PageHeader from "../../components/PageHeader/PageHeader";
import CelestialObjectCardsContainer from "../../components/CelestialObjectCardsContainer/CelestialObjectCardsContainer";
import CelestialObjectCard from "../../components/CelestialObjectCard/CelestialObjectCard";

import { StyledSection } from "./StyledPlanets";

const Planets = () => (
  <>
    <PageHeader title="Planets"/>
    <StyledSection>
      <CelestialObjectCardsContainer>
        {planets.map((planet) => (
          <CelestialObjectCard
            key={planet.id}
            color={planet.color}
            name={planet.name}
            to={`/body/${planet.id}`}
          />
        ))}
      </CelestialObjectCardsContainer>
    </StyledSection>
  </>
);

export default Planets;
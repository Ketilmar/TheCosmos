import { planets } from '../constants'

import PageHeader from '../components/PageHeader'
import CelestialObjectCardsContainer from '../components/CelestialObjectCardsContainer'
import CelestialObjectCard from '../components/CelestialObjectCard'

const Planets = () => (
  <>
    <PageHeader title="Planets"/>
    <section>
      <CelestialObjectCardsContainer>
        {planets.map((planet) => (
          <CelestialObjectCard
            color={planet.color}
            name={planet.name}
            to={`/body/${planet.id}`}
          />
        ))}
      </CelestialObjectCardsContainer>
    </section>
  </>
)

export default Planets
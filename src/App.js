import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";

import NotFoundPage from "./pages/NotFound/NotFound";
import BodyPage from "./pages/Body/Body";
import PlanetsPage from "./pages/Planets/Planets";
import { About as AboutPage } from "./pages/About";

const Placeholder = () => <div className="App"></div>;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledLayoutContainer>
        <Header />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/"
            element={<Placeholder /> /* TODO: Replace with landing page */}
          />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/body/:id" element={<BodyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/contact"
            element={<Placeholder /> /* TODO: Replace with contact page */}
          />
        </Routes>
        <Footer />
      </StyledLayoutContainer>
    </>
  );
}

const StyledLayoutContainer = styled.div`
  > * {
    padding-inline: 1em;

    @media (min-width: 48em) {
      padding-inline: 2em;
    }

    @media (min-width: 80em) {
      padding-inline: calc((100% - 80em) / 2 + 2.5em);
    }
  }
`;

export default App;

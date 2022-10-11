import { Routes, Route } from "react-router-dom";

import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { Header } from "./components/Header";

import BodyPage from "./pages/Body";
import PlanetsPage from "./pages/Planets";

const Placeholder = () => <div className="App"></div>;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route
          path="*"
          element={<Placeholder /> /* TODO: Replace with 404 page */}
        />
        <Route
          path="/"
          element={<Placeholder /> /* TODO: Replace with landing page */}
        />
        <Route
          path="/planets"
          element={<PlanetsPage />}
        />
        <Route
          path="/body/:id"
          element={<BodyPage />}
        />
        <Route
          path="/about"
          element={<Placeholder /> /* TODO: Replace with about page */}
        />
        <Route
          path="/contact"
          element={<Placeholder /> /* TODO: Replace with contact page */}
        />
      </Routes>
      {/* TODO: Add site footer component here */}
    </>
  );
}

export default App;

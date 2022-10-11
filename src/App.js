import { Routes, Route } from "react-router-dom";

import "./App.css";
//<<<<<<< Updated upstream
import GlobalStyles from "./GlobalStyles";
import { Header } from "./components/Header";

const Placeholder = () => <div className="App"></div>;
//=======
import { Footer } from "./components/Footer";
//>>>>>>> Stashed changes

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
          element={<Placeholder /> /* TODO: Replace with planets page */}
        />
        <Route
          path="/planet/:id"
          element={<Placeholder /> /* TODO: Replace with planet page */}
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
      <Footer />
    </>
  );
}

export default App;

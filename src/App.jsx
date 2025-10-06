import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import TurnOffLogs from "./TurnOffLogs";
import { useTranslation } from "react-i18next";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const { i18n } = useTranslation();
  const language = i18n.language || "ar";

  TurnOffLogs();

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div className="text-white text-center p-8">404 - Page Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
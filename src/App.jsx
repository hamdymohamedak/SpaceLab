import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import TurnOffLogs from "./TurnOffLogs";
import { useTranslation } from "react-i18next";
import Projects from "./Components/Projects/Projects";
import Partners from "./Components/Partners/Partners";
import WhyChooseUs from "./Components/WhyShooseUs/WhyShooseUs";
import Stats from "./Components/Stats/Stats";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const { i18n } = useTranslation();
  const language = i18n.language || "ar";

  // Function will be used at production to TurnOff the test Logs
  // TurnOffLogs();

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
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="*" element={<div className="text-white text-center p-8">404 - Page Not Found</div>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
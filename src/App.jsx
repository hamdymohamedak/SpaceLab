import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import TurnOffLogs from './TurnOffLogs'; 
import { useTranslation } from "react-i18next"; 

function App() {
  const { i18n } = useTranslation();
  const language = i18n.language || "ar";

  // Function will be used at production to TurnOff the test Logs
  // TurnOffLogs()
  
  return (
    <>
      <Header />
        <Hero />
 
    </>
  );
}

export default App;

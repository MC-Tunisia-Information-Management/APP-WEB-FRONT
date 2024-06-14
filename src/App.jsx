import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import KnowledgeHub from "./components/KnowledgeHub/KnowledgeHub";
import ConferenceOutputs from "./components/ConferenceOutputs/ConferenceOutputs";
import NetworkTracker from "./components/NetworkTracker/NetworkTracker";
import NavBar from "./components/NavBar/NavBar";
import Application from "./components/Application/Application";
import ContactUs from "./components/ContactUs/ContactUs";
import McTunisia from "./components/MCTunisia/McTunisia";
import HubPage from "./components/KnowledgeHub/HubPage";
import ScrollToTop from "./components/NavBar/ScrollToTop";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-FPEVXFBPT7");
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mc-tunisia" element={<McTunisia />} />
          <Route path="/knowledge-hub/:hub" element={<HubPage />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/network-trackers" element={<NetworkTracker />} />
          <Route path="/application" element={<Application />} />
          <Route path="/conference-outputs" element={<ConferenceOutputs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import KnowledgeHub from "./pages/KnowledgeHub";
import ConferenceOutputs from "./pages/ConferenceOutputs";
import NetworkTracker from "./pages/NetworkTracker";
// import Application from "./components/Application/Application";
import ContactUs from "./pages/ContactUs";
import MC from "./pages/MC";
import McvpsPage from './pages/McvpsPage';

import HubPage from "./pages/HubPage";
import ScrollToTop from "./components/NavBar/ScrollToTop";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-FPEVXFBPT7");
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mc-tunisia" element={<MC />} />
          <Route path="/knowledge-hub/:hub" element={<HubPage />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/network-trackers" element={<NetworkTracker />} />
          {/* <Route path="/application" element={<Application />} /> */}
          <Route path="/conference-outputs" element={<ConferenceOutputs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/McvpsPage" element={<McvpsPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
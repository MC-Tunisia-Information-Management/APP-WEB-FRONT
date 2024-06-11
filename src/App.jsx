import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import KnowledgeHub from "./components/KnowledgeHub/KnowledgeHub";
import ConferenceOutputs from "./components/ConferenceOutputs/ConferenceOutputs";
import NetworkTracker from "./components/NetworkTracker/NetworkTracker";
import NavBar from "./components/NavBar/NavBar";
import Application from "./components/Application/Application";
import ContactUs from "./components/ContactUs/ContactUs";
import McTunisia from "./components/MCTunisia/McTunisia";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <div>
            <Routes>
              <Route path="/home" element={<NavBar />} />
              <Route path="/mc-tunisia" element={<NavBar />} />
              <Route path="/knowledge-hub" element={<NavBar />} />
              <Route path="/network-trackers" element={<NavBar />} />
              <Route path="/conference-outputs" element={<NavBar />} />
              <Route path="/contact-us" element={<NavBar />} />
              <Route path="/" element={<NavBar />} />
            </Routes>
          </div>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/mc-tunisia" element={<McTunisia />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />
            <Route path="/network-trackers" element={<NetworkTracker />} />
            <Route path="/application" element={<Application />} />
            <Route path="/conference-outputs" element={<ConferenceOutputs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

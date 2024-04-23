import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import KnowledgeHub from './components/KnowledgeHub/KnowledgeHub';
import ConferenceOutputs from './components/ConferenceOutputs/ConferenceOutputs';
import NetworkTracker from './components/NetworkTracker/NetworkTracker';
import NavBar from './components/NavBar/NavBar';
import Application from './components/Application.jsx/Application';

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <div>
            <Routes>
              <Route path='/home' element= {<NavBar />} />
              <Route path="/knowledge-hub" element={<NavBar />} />
              <Route path="/network-trackers" element={<NavBar />} />
              <Route path="/application" element={<NavBar />} />
              <Route path="/conference-outputs" element={<NavBar />} />
              <Route path="/" element={<NavBar />} />
            </Routes>
          </div>
          
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />
            <Route path='/network-trackers' element={<NetworkTracker />} />
            <Route path='/application' element={<Application />} />
            <Route path="/conference-outputs" element={<ConferenceOutputs />} />           
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import KnowledgeHub from './components/KnowledgeHub/KnowledgeHub';
import ConferenceOutputs from './components/ConferenceOutputs/ConferenceOutputs';
import NetworkTracker from './components/NetworkTracker/NetworkTracker';


function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />
            <Route path="/conference-outputs" element={<ConferenceOutputs />} />
            <Route path='/network-tracker' element={<NetworkTracker />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

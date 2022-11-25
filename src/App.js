import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename='/router-practice'>
        <Routes>
          <Route exact path='/router-practice' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

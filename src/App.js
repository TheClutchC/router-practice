import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/about' element={<AboutPage />} />
        </Routes>
    </HashRouter>
  );
}

export default App;

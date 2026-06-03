import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Drama from './pages/drama';
import Entertainment from './pages/entertainment';
import Movie from './pages/movie';
import Sports from './pages/sports';
import Animation from './pages/animation';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#000000' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/animation" element={<Animation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
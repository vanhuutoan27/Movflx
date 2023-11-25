import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import TVShow from './pages/TVShow/TVShow';
import Pricing from './pages/Pricing/Pricing';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tvshow" element={<TVShow />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

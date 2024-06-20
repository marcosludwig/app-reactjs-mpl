import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PhotoGallery from './pages/PhotoGallery';
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery/:width/:height" element={<PhotoGallery />} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
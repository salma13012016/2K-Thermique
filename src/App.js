import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './routes/About';
import Legal from './routes/Legal';
import Contact from './routes/Contact';
import Home from './routes/Home';


const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/legal" element={<Legal />} />
    </Routes>
    <Footer />
  </Router>
  );

};

export default App;
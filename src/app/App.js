import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';
import ThemeState from '../context/theme/ThemeState';
import ImageState from '../context/images/ImageState';
import VideoState from '../context/videos/VideoState';
import ContactInfoState from '../context/contactInfo/ContactInfoState';
import StatsState from '../context/stats/StatsState';

function App() {
  return (
    <>
      <VideoState>
        <ImageState>
          <StatsState>
            <ContactInfoState>
              <ThemeState>
                <BrowserRouter>
                  <Navbar />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                  </Routes>
                </BrowserRouter>
              </ThemeState>
            </ContactInfoState>
          </StatsState>
        </ImageState>
      </VideoState>
    </>
  );
}

export default App;

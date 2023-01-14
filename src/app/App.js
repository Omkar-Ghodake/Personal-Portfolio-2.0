import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import loadable from 'react-loadable'
import Navbar from '../components/Navbar';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';

import ThemeState from '../context/theme/ThemeState';
import ImageState from '../context/images/ImageState';
import VideoState from '../context/videos/VideoState';
import ContactInfoState from '../context/contactInfo/ContactInfoState';
import StatsState from '../context/stats/StatsState';
import InternshipState from '../context/internships/InternshipState';

import Loader from '../components/Loader';

const Portfolio = loadable({
  loader: () => import("../components/portfolio/Portfolio"),
  loading: () => Loader
})

function App() {
  return (
    <>
      <VideoState>
        <ImageState>
          <StatsState>
            <ContactInfoState>
              <InternshipState>
                <ThemeState>
                  <BrowserRouter>
                    <Navbar />
                    <Routes>
                      <Route path='/' element={ <Home /> } />
                      <Route path='/about' element={ <About /> } />
                      <Route path='/portfolio' element={ <Portfolio /> } />
                      <Route path='/contact' element={ <Contact /> } />
                    </Routes>
                  </BrowserRouter>
                </ThemeState>
              </InternshipState>
            </ContactInfoState>
          </StatsState>
        </ImageState>
      </VideoState>
    </>
  );
}

export default App;

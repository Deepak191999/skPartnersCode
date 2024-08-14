import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopAddress from './components/TopAddress/TopAddress';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Features from './components/Features';
import Quote from './components/Quote';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer/Footer';
import AboutPage from './components/AboutPage/AboutPage';
import ServicePage from './components/ServicePage/ServicePage';
import AboutUs from './components/AboutPage/AboutUs';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ContactPage from './components/ContactPage/ContactPage';
import JoinOurTeam from './components/JoinTeamPage/JoinOurTeam';

function App() {
  return (
    <Router>
    <TopAddress />
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
          <Carousel />
          <Features />
          <AboutUs/>
          
          {/* <Project /> */}
          <Quote />
          {/* <Team /> */}
          <Testimonial />
          <Footer />
        </>
      } />
       <Route path="/about" element={<AboutPage/>} />
       <Route path="/services" element={<ServicePage />} />
       <Route path="/projects" element={<ProjectPage />} />
       <Route path="/contact" element={<ContactPage/>} />
       <Route path="/joinourteam" element={<JoinOurTeam/>} />

    </Routes>
  </Router>
  );
}

export default App;

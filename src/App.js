import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopAddress from './components/TopAddress/TopAddress';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Features from './components/Features';
import Quote from './components/Quote';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer/Footer';
import AboutPage from './components/AboutPage/AboutPage';

import AboutUs from './components/AboutPage/AboutUs';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ContactPage from './components/ContactPage/ContactPage';
import JoinOurTeam from './components/JoinTeamPage/JoinOurTeam';
import Qualitative from './components/Service/Qualitative';
import Quantitative from './components/Service/Quantitative';
import Onlineresearch from './components/Service/Onlineresearch';
import Telephonesurvey from './components/Service/Telephonesurvey';
import Businessresearch from './components/Service/Businessresearch';
import Otherservice from './components/Service/Otherservice';
import Panel from './components/Panel/Panel';
import Happyclient from './components/Happyclient/Happyclient';
import IndustriesServed from './components/Industry/IndustryServed';
import Itservice from './components/Service/Itservice';
import Faq from './components/Faq';

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
          <Happyclient/>
          <IndustriesServed/>          
          <Testimonial />
          <Footer />
        </>
      } />
       <Route path="/about" element={<AboutPage/>} />
       <Route path="/projects" element={<ProjectPage />} />
       <Route path="/contact" element={<ContactPage/>} />
       <Route path="/joinourteam" element={<JoinOurTeam/>} />
       <Route path="/getquote" element={<Quote/>} />
       <Route path="/qualitative" element={<Qualitative/>} />
       <Route path="/quantitative" element={<Quantitative/>} />
       <Route path="/onlineresearch" element={<Onlineresearch/>} />
       <Route path="/telephonesurvey" element={<Telephonesurvey/>} />
       <Route path="/businessresearch" element={<Businessresearch/>} />
       <Route path="/itservice" element={<Itservice/>} />
       <Route path="/otherservice" element={<Otherservice/>} />
       <Route path="/joinourpanel" element={<Panel/>} />
       <Route path="/faq" element={<Faq/>} />
       

    </Routes>
  </Router>
  );
}

export default App;

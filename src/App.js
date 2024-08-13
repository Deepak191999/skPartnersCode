import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopAddress from './components/TopAddress/TopAddress';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { BrowserRouter as Router } from 'react-router-dom';
import Features from './components/Features';
import ABoutUs from './components/ABoutUs';
import Service from './components/Service';
import Project from './components/Project';
import Quote from './components/Quote';
import Team from './components/Team';
function App() {
  return (
    <Router>

      <TopAddress />
      <Navbar/>
      <Carousel/>
      <Features/>
      <ABoutUs/>
      <Service/>
      <Project/>
      <Quote/>
      <Team/>

    </Router>
  );
}

export default App;

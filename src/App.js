import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopAdress from './components/TopAdress';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <TopAdress />
      <Navbar/>
      <Carousel/>
    </div>
  );
}

export default App;

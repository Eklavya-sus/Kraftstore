import './App.css';
import BestSeller from './components/BestSeller';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import NavBar from './components/NavBar';
import MoreCollection from './components/MoreCollection';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <FeaturedProducts/>
      <BestSeller/>
      <MoreCollection/>
      <Testimonials/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

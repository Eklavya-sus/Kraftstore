import './App.css';
import BestSeller from './components/BestSeller';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import NavBar from './components/NavBar';
import MoreCollection from './components/MoreCollection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <FeaturedProducts/>
      <BestSeller/>
      <MoreCollection/>
      <Testimonials/>
    </div>
  );
}

export default App;

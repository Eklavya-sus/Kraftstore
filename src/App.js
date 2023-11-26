import './App.css';
import BestSeller from './components/BestSeller';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import NavBar from './components/NavBar';
import MoreCollection from './components/MoreCollection';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <FeaturedProducts/>
      <BestSeller/>
      <MoreCollection/>
    </div>
  );
}

export default App;

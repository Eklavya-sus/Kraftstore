import './App.css';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <FeaturedProducts/>
    </div>
  );
}

export default App;

import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Network from './components/Network/Network';
import Testimonials from './components/Testimonials/Testimonials';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <Pricing/>
      <Network/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;

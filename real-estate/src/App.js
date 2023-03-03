import './App.css';
import Companies from './Components/Companies';
import Details from './Components/Details';
import Footer from './Components/Footer';
import GetStarted from './Components/GetStarted';
import Guide from './Components/Guide';
import Hero from './Components/Hero';
import Properties from './Components/Properties';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Companies />
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;

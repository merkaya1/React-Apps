import './App.css';
import Companies from './Components/Companies';
import Details from './Components/Details';
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
    </div>
  );
}

export default App;

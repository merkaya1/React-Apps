import {Routes, Route} from 'react-router-dom'
import './App.css';
import BasketCard from './components/BasketCard';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
       <h1>Alışveriş Listem</h1>
       <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/basket' element={<BasketCard/>}/>
       </Routes>
    </div>
  );
}

export default App;

import {useEffect, useState} from 'react'
import './App.css';
import CardList from './components/CardList/CardList';
import MonterReborn from './components/MonsterRebornImg/MonterReborn';
import Search from './components/Search/Search';
import data from './monster.json';

function App() {
  const [monsters, setMonsters] = useState([])
  const [search, setSearch] = useState("");
  // const [filteredMonster, setFilteredMonster] = useState([])
  useEffect(() => {
    // fetch(data)
    // .then(res => res.json())
    // .then(data => setMonster(data))
    setMonsters(data)
    // setFilteredMonster(data.filter(item => item.name.toLowerCase().includes(search)))
  },[])


     /* sorulacak */
  // useEffect(() => {
  //   setFilteredMonster(data.filter(item => item.name.toLowerCase().includes(search)))
  // },[])



  
  // console.log(monsters)
  // console.log("filterenMons", filteredMonster);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase()
    setSearch(searchFieldString)
    console.log(searchFieldString)
  }

  const filteredMonster = monsters.filter(item => item.name.toLowerCase().includes(search))
  
  console.log(filteredMonster);
  return (
    <div className="App">
      <h1 className='app-title'>Monster Reborn</h1>
      <Search onChangeHandler={onSearchChange} />
      <MonterReborn/>
      <CardList filteredMonster={filteredMonster} monsters = {monsters}/>
    </div>
  );
}

export default App;

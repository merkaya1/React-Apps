import React from 'react'
import Card from './Card/Card'
import './CardList.css'

const CardList = ({filteredMonster, monsters}) => {

    // console.log("montersss", monsters);
  return (
    <div className='card-list'>
        <div className='card-list-container'>
        <h2 className='card-list-title'>MONSTERS</h2>
        <div className='card-container'>
        {
            filteredMonster.map(monster => {
                return <div key={monster.id} className="cardlist-card">
                         <Card id={monster.id} name={monster.name} type={monster.type} atk={monster.atk} def={monster.def} image={monster.image}/>
                </div>
                
               

                
            })
        }
        </div>
        </div>
        
    </div>
  )
}

export default CardList
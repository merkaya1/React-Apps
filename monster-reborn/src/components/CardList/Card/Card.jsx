import React from 'react'
import "./Card.css"

const Card = ({id,name, type, atk, def, image}) => {
  return (
    <div key={id} className="card">
        <img src={image} alt="" />
        <h4>{name}</h4>
        <p>{type.join(', ')}</p>
        <span>{`ATK ${atk} / DEF ${def}`}</span>
    </div>
  )
}

export default Card
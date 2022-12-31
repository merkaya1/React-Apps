import React from 'react'
import './Search.css'

const Search = ({onChangeHandler}) => {
  return (
    <div className='search'>
        <input type="search" placeholder='Monster Ara' onChange={onChangeHandler} />
    </div>
  )
}

export default Search
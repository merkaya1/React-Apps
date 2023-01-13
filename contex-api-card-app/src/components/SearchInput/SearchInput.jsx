import React from 'react'
import { Search } from './SearchInput.styled'


const SearchInput = ({onSearchChange}) => {
  return (
        <Search>
            <input type="text" placeholder='Search Book' onChange={onSearchChange}/>
        </Search>
          
        
  )
}

export default SearchInput
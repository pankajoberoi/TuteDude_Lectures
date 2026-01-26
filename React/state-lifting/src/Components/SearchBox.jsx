import React from 'react'

const SearchBox = ({setQuery}) => {
  return (
    <div>

        <input placeholder='Search User'
          onChange={(e)=> setQuery(e.target.value)}
        ></input>



    </div>
  )
}

export default SearchBox
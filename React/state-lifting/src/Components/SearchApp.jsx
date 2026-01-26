import React from 'react'
import { useState } from 'react'
import SearchBox from './SearchBox'
import Results from './Results'


const SearchApp = () => {

    const [query,setQuery]=useState("")


  return (
    <div>
        <SearchBox setQuery={setQuery}/>

        <Results query={query}/>

    </div>
  )
}

export default SearchApp
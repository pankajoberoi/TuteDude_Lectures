import React from 'react'
import './Card.css'
const Movie_card = () => {

    let movies=[                                 
        {title:"Inception" ,genres:["Sci-Fi","Thriller"]},
        {title:"KGF" , genres:["Action","Drama"]}
    ]


  return (
    <div>
        {
            movies.map(m =>(
                <div key={m.title} className='card'>
                    <h2>{m.title}</h2>
                    <ul>
                        {m.genres.map(g => <li key={g}>{g}</li>)}
                    </ul>
                </div>
            ))
        }
    </div>
  )
}

export default Movie_card
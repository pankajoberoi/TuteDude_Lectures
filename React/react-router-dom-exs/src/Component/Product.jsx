import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = ({items}) => {

  const navigate=useNavigate()

  const [data,setData]=useState({
    name:"",
    price:"",
    availability:""
  })

  const {id}=useParams()

  function handleClick(){

   let filteredItem=items.filter((i)=>{
    return (i.id==id)?i:""
   }) 

   if(filteredItem.length>0){

    setData({...data,name:filteredItem[0].name,price:filteredItem[0].price,availability:filteredItem[0].availability})

   
   }
   else{
      alert("Data not found for this id")
   }

   

  }

  return (
    <div>
      <h1>Product id : {id}</h1>

      <button onClick={handleClick}>Get Details for {id} : id</button>

      <h3>{data.name} : {data.price} : {data.availability}</h3>

      <button onClick={()=>navigate("/products") }>Go to List</button>

    </div>
  )
}

export default Product
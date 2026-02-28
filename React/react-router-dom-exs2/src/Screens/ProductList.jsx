import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductList = () => {

    const [searchParams,setSearchParams]=useSearchParams()//[{key:value},{key:value}]

    const products=[
    { id: 1, name: "iPhone 13", category: "mobile", price: 60000 },
    { id: 2, name: "Samsung Galaxy", category: "mobile", price: 30000 },
    { id: 3, name: "Redmi Note", category: "mobile", price: 12000 },
    { id: 4, name: "Dell Laptop", category: "laptop", price: 55000 },
    { id: 5, name: "HP Laptop", category: "laptop", price: 45000 },
    { id: 6, name: "MacBook", category: "laptop", price: 120000 },
  ];

  const category=searchParams.get("category") //&category=mobile
  const price=searchParams.get("price")// products<50000
    


//   filtering
const filteredData=products.filter((product)=>{
    if(category && product.category !==category){
        return false
    }
    if(price && product.price > Number(price)){
        return false
    }

    return true
})

//   Update Filters -> replace/update or will add it 

  const updateFilters= (newParams) => {
    setSearchParams((prev)=>{
        return {...Object.fromEntries(prev),...newParams}
    })
  }

  return (
    <div>
        <h2>Product List</h2>

        <h4>Filters:</h4>
        <p>Category : {category || "ALL"}</p>
        <p>Price : {price || "No Limits"}</p>


        <button onClick={()=> updateFilters({category:"mobile"})}>Mobile</button>
        <button onClick={()=> updateFilters({category:"laptop"})}>Laptops</button>
        <button onClick={()=> updateFilters({price:50000})}>Under 50k</button>
        <button onClick={()=> setSearchParams({})}>Clear Filters</button>

        <hr />

        <h3>Results</h3>

        {filteredData.length>0?(
            filteredData.map((product)=>(
              <div key={product.id}>
                <p>{product.id} - {product.category} - {product.name} - {product.price}</p>
              </div>  
            ))
        ):(<p>No Products founds</p>)}



    </div>
  )
}

export default ProductList
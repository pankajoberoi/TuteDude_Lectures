import { products } from "../data/product"
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductList = () => {

  const dispatch = useDispatch();

  const handleAdd = (product) => {

    // dispatch action
    dispatch(addToCart(product));
  };

  return (
    <div>

      <h2>Products</h2>

      {products.map((product) => (

        <div key={product.id} style={{marginBottom:"10px"}}>

          <h4>{product.name}</h4>
          <p>Price: ₹{product.price}</p>

          <button onClick={() => handleAdd(product)}>
            Add to Cart
          </button>

        </div>

      ))}

    </div>
  );
};

export default ProductList;
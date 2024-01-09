import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";

const Home = () => {

  const addToCart = () => {

  };

  return (
    <div className="home">
      <section>

      </section>
      <h1>
    Products
<Link to="/search" className="findmore"> More</Link>
      </h1>

      <main>
       <ProductCard productId="temp1" name="mac" price={24000} stock={3} handler={addToCart} photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"/>
      </main>
    </div>
  )
};

export default Home
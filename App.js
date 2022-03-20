import React from 'react';
import Products from './products';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { faCartPlus,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const cartItems = [];


  return (
    <div>
        <Navbar icone={faCartPlus} prods={cartItems}/>
        <div className="row">
        {Products.map((product,index)=>{
          return(
            <Cards key = {index} id = {index}  img = {product.img} name = {product.name} rate = {product.rate} />
          );
        })
      }
        </div>
        <Footer/>
      </div>
  );
}
export default App;

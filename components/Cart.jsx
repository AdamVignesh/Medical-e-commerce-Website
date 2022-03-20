import React from 'react';
import Navbar from './Navbar';
import { faCartPlus,faUser,faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cartItems from '../itemsOfCart';
import Card from './Cards';
function Cart()
{
  document.getElementById('hk').innerHTML=cartItems[0].name;
  return (

    <div>
      <Navbar icone = {faHome}/>
      {cartItems.map((item)=>{
          return(
             <Card id = {item.id} key = {item.id} name = {item.name} img = {item.img} rate = {item.rate}/>
           );
      })
    }
    <h1 id="hk"> hiiii</h1>

    </div>



  );
}
export default Cart;

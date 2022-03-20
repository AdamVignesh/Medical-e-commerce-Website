import React,{ useState } from 'react';
import Products from '../products'
import cartItems from '../itemsOfCart';
function Cards(props)
{
  function handleClick(event)
  {
    cartItems.add(props);
  }
  return (
  <div className="card col-md-2 col-sm-12 " style={{width:"18rem",marginLeft:"20px",marginLeft:"40px",marginTop:"40px"}}>
      <img style={{height:"200px",width:"200px"}}className="card-img-top" src={props.img} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Rate:{props.rate}</p>
        <button id='but'onClick={handleClick} className="btn btn-primary">Buy Now</button>
      </div>
    </div>


  );
}
export default Cards;

import React from 'react';
import ReactDOM from 'react-dom';
import Icons from './Icons';
import { faCartPlus,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from './Cart';
function Navbar(props)
{
  function handleClickk(event)
  {
    ReactDOM.render(<Cart/>,document.getElementById('root'));
  }

  return (
   <div>
    <nav style={{backgroundColor:"#e3f2fd"}}className="navbar navbar-light ">
      <h2 id="hh">NAM Pharmacy</h2>
      <span>
      <span><a onClick={handleClickk}  style={{color:"black",fontSize:"20px",padding:"10px"}} href="#Content"><Icons ic = {props.icone}/> </a> </span>
      <span><a style={{color:"black",fontSize:"20px",padding:"10px"}} href="#Content"><Icons ic = {faUser}/> </a> </span>
      </span>
     </nav>
   </div>
  );
}
export default Navbar;

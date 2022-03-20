import React from 'react';
import { faCartPlus,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Icons(props)
{
  return (
       <FontAwesomeIcon icon = {props.ic}/>
  );
}

export default Icons;

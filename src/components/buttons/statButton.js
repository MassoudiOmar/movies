import React from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineStar } from 'react-icons/ai';

function StarButton({ onClick }) {
  return (
    <Button variant="outline-light" onClick={onClick}>
     <AiOutlineStar style={{marginLeft:"5px",marginRight:"5px" ,color:"white",fontSize:"20px" }} />
    </Button>
  );
}

export default StarButton;

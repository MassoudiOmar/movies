import React from "react";
import Button from "react-bootstrap/Button";

function InformationButton({ onClick }) {
  return (
    <div className="btn-responsive">

    <Button variant="outline-light" onClick={onClick}  >
      En savoir plus
    </Button>
    </div>
  );
}

export default InformationButton;

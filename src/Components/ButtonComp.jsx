import React from "react";
import { Button } from "reactstrap";

const ButtonComp = ({ handleSubmit, label, border, color, styles }) => {
  return (
    <Button
      color={color}
      outline={border}
      onClick={handleSubmit}
      style={styles}
    >
      {label}
    </Button>
  );
};

export default ButtonComp;

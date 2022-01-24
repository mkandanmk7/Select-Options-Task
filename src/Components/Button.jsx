import React from "react";

const Button = ({ handleSubmit }) => {
  return (
    <Button color="danger" outline onClick={handleSubmit}>
      Submit
    </Button>
  );
};

export default Button;

import React, { useState } from "react";
import { Label } from "reactstrap";
import Selector from "./Select";

const CheckBox = ({ resource }) => {
  console.log(resource);
  const getSelect = () => {
    if (resource.category === "specific") return true;
  };
  const show = getSelect();
  const [showSelect, setShowSelect] = useState(show);
  const label = resource.resourceIndex;
  const handleSelect = () => {
    setShowSelect(!!showSelect);
  };
  // const {resourceIndex}=resource;
  return (
    <Label check>
      <input type="checkbox" onClick={handleSelect} />

      {label}
      {showSelect && <Selector />}
    </Label>
  );
};

export default CheckBox;

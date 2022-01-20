import React, { useState } from "react";
import { Button } from "reactstrap";
import Select from "react-select";
import { options } from "../../OptionsValues";

const Selector = ({ onChange, viewSelect }) => {
  console.log(options);

  const [selectedStoresCount, setselectedStoresCount] = useState(0);
  const [totalStoresCount, setTotalStoresCount] = useState(options.length);
  const handleSelect = (e) => {
    console.log(e.length);
    setselectedStoresCount(e.length);
    console.log(e);
  };

  const handleSubmit = (e) => {
    console.log(e);
    //   e.preventDefault();
  };
  return (
    <>
      {viewSelect && (
        <span>
          stores : {selectedStoresCount} of {totalStoresCount}
        </span>
      )}
      <div style={{ width: "80vh", marginLeft: "30vh" }}>
        <Select
          //   defaultValue={[options[2], options[3]]}
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleSelect}
        />
      </div>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Selector;

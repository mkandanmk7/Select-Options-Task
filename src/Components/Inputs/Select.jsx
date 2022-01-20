import React, { useState } from "react";
import { Button } from "reactstrap";
import Select from "react-select";
import { options } from "../../OptionsValues";
import { map, reduce } from "lodash";
import { clear } from "@testing-library/user-event/dist/clear";

const Selector = ({ viewSelect }) => {
  const [selectedStoresCount, setselectedStoresCount] = useState(0);
  const [totalStoresCount, setTotalStoresCount] = useState(options.length);
  const [selectedStores, setSelectedStores] = useState([]);

  //get selected Stores
  const getSelectedStores = (store, last) => {
    // console.log(store[last]);
    let storeList = [];
    map(store[last], (store) => {
      storeList.push(store.label);
    });
    // console.log(storeList);
    return storeList;
  };
  const handleSelect = (e) => {
    const lastSelectedStore = e.length - 1;
    setselectedStoresCount(e.length);
    selectedStores.push(e);
    const stores = getSelectedStores(selectedStores, lastSelectedStore);
    // console.log(stores);

    setSelectedStores(stores);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedStores);
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
      <Button color="danger" outline onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Selector;

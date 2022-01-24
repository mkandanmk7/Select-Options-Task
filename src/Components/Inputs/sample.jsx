import React, { useState } from "react";
// import { Button } from "reactstrap";
import Select from "react-select";
import { options } from "../../OptionsValues";
import { map } from "lodash";
import Button from "../Button";

const Selector = ({ viewSelect }) => {
  console.log("view selector", viewSelect);
  const [selectedStoresCount, setselectedStoresCount] = useState(0);
  const totalStoresCount = options.length;
  const [selectedStores, setSelectedStores] = useState([]);
  console.log(selectedStores);

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
      <Button outline color="danger" onClick={handleSubmit} />
    </>
  );
};

export default Selector;

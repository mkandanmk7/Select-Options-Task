import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import FormWrapper from "./FormWrapper";
import { Card } from "reactstrap";
import { listedAllStores } from "../OptionsValues";
import ButtonComp from "./ButtonComp";
import ReactSelect from "./Inputs/ReactSelect";

const App = () => {
  const [viewSelect, setViewSelect] = useState(false);
  const [options, setOptions] = useState(listedAllStores);
  const [allStores, setAllStores] = useState(false);
  const [specificStores, setSpecifiStores] = useState(false);

  // -----------select -----------
  const [selectedStoresCount, setselectedStoresCount] = useState(0);
  const [allSelectedStore, setAllselectedStores] = useState(listedAllStores);
  const [selectedStores, setSelectedStores] = useState([]);
  //   const [selectedStoresList, setSelectedStoresList] = useState([]);
  const totalStoresCount = options.length;

  //changes states boolean values

  const changeStates = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setViewSelect(false);
      setAllselectedStores(options);
      setAllStores(true);
      setSpecifiStores(false);
    }
  };
  //changes states boolean values
  const changeStatesSpecific = (e) => {
    const checked = e.target.checked;

    if (checked) {
      setViewSelect(true);
      setAllStores(false);
      setSpecifiStores(true);
    } else if (!checked) {
      setViewSelect(false);
      setAllStores(false);
      setSpecifiStores(false);
    }
  };

  //viewSelect change checkbox change
  const handleChange = (e) => {
    if (e.target.name === "allstores" && e.target.checked === true) {
      changeStates(e);
    } else if (
      e.target.name === "specificstores" &&
      e.target.checked === true
    ) {
      changeStatesSpecific(e);
    } else if (
      e.target.name === "specificstores" &&
      e.target.checked === false
    ) {
      changeStatesSpecific(e);
    }
  };

  //select tag length
  const handleSelect = (e) => {
    let selectedStore = e.length;
    specificStores && setSelectedStores(e);
    specificStores && setselectedStoresCount(selectedStore);
  };

  const clearStoresList = () => {
    setSelectedStores([]);
    setAllselectedStores([]);
  };

  const unChecked = () => {
    setSpecifiStores(false);
    setAllStores(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    allStores && console.log(allSelectedStore);
    specificStores && console.log(selectedStores);
    setViewSelect(false);
    unChecked();
    clearStoresList();
  };

  return (
    <div>
      <FormWrapper className="Main_container">
        <Card className="m-3">
          <div className="m-2">
            <input
              name="allstores"
              style={{ padding: "15px" }}
              type="checkbox"
              onChange={handleChange}
              checked={allStores}
            />
            All Stores
            <br></br>
            <input
              name="specificstores"
              style={{ padding: "15px" }}
              type="checkbox"
              checked={specificStores}
              onChange={handleChange}
            />
            Specific Stores
          </div>
          <br />
          {/* selectedStoresCount,totalStoresCount,selectedStores,options,handleSelect */}
          {viewSelect && (
            <ReactSelect
              selectedStoresCount={selectedStoresCount}
              totalStoresCount={totalStoresCount}
              selectedStores={selectedStores}
              options={options}
              handleSelect={handleSelect}
            />
          )}
        </Card>

        <ButtonComp
          color="danger"
          type="submit"
          border={true}
          label={"submit"}
          handleSubmit={handleSubmit}
          styles={{ marginLeft: "95vh" }}
        />
      </FormWrapper>
    </div>
  );
};

export default App;

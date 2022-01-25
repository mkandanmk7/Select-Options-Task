import React, { useState } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import FormWrapper from "./FormWrapper";
import { Button, Card } from "reactstrap";
import { listedAllStores } from "../OptionsValues";

const SampleSelect = () => {
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

  //viewSelect change checkbox change
  const handleChange = (e) => {
    if (e.target.name === "allstores" && e.target.checked === true) {
      setViewSelect(false);
      setAllselectedStores(options);
      setAllStores(true);
      setSpecifiStores(false);
    } else if (
      e.target.name === "specificstores" &&
      e.target.checked === true
    ) {
      setViewSelect(true);
      setAllStores(false);
      setSpecifiStores(true);
    } else if (
      e.target.name === "specificstores" &&
      e.target.checked === false
    ) {
      setViewSelect(false);
      setAllStores(false);
      setSpecifiStores(false);
    }
  };

  //select tag length
  const handleSelect = (e) => {
    let selectedStore = e.length;
    specificStores && setSelectedStores(e);
    specificStores && setselectedStoresCount(selectedStore);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    allStores && console.log(allSelectedStore);
    specificStores && console.log(selectedStores);
    setViewSelect(false);
    setSelectedStores([]);
    setAllselectedStores([]);
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

          {viewSelect && (
            <>
              <span>
                stores : {selectedStoresCount} of {totalStoresCount}
              </span>

              <div style={{ width: "80vh", marginLeft: "30vh" }}>
                <Select
                  isMulti
                  name="selected"
                  // defaultValue={storeValues}
                  value={selectedStores}
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={handleSelect}
                />
              </div>
            </>
          )}
        </Card>

        <Button
          style={{ marginLeft: "95vh" }}
          color="danger"
          type="submit"
          outline
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FormWrapper>
    </div>
  );
};

export default SampleSelect;

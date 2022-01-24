import { useEffect, useState } from "react";
import "./App.css";
import FormWrapper from "./Components/FormWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "reactstrap";
import { options } from "./OptionsValues";
import Select from "react-select";
import { map } from "lodash";

function App() {
  const [viewSelect, setViewSelect] = useState(false);
  // const [resources, setResources] = useState(jsonData);
  const [ticked, setTicked] = useState(false);

  // -----------select -----------
  const [selectedStoresCount, setselectedStoresCount] = useState(0);
  const [selectedStores, setSelectedStores] = useState([]);
  const [checked, setChecked] = useState(false);
  const [storeValues, setStoreValues] = useState([]);

  const totalStoresCount = options.length;

  const handleCheck = (e) => {
    if (e.target.name === "specificstores") {
      setViewSelect(true);
    } else if (e.target.name === "allstores") {
      let isCheck = e.target.checked;
      if (isCheck === true) {
        setTicked(!ticked);
        setViewSelect(false);
      }
    }
  };

  const isChecked = (e) => {
    console.log(e.target.name);
    if (e.target.name === "specificstores") {
      setChecked(!checked);
    } else if (e.target.name === "allstores") {
      setChecked(!checked);
    }
  };

  //get selected Stores
  const getSelectedStores = (store, last) => {
    let storeList = [];
    map(store[last], (store) => {
      storeList.push(store.label);
    });
    return storeList;
  };
  const handleSelect = (e) => {
    const lastSelectedStore = e.length - 1;
    setselectedStoresCount(e.length);
    selectedStores.push(e);
    const stores = getSelectedStores(selectedStores, lastSelectedStore);

    setSelectedStores(stores);
  };

  const AllStores = () => {
    let storeAll = [];
    map(options, (options) => {
      storeAll.push(options.label);
    });
    return storeAll;
  };

  useEffect(() => {
    AllStores();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticked === true && !viewSelect) {
      let listedAllStores = AllStores();
      console.log(listedAllStores);
    }
    viewSelect && console.log(selectedStores);
    console.log("out of Functions");
  };

  return (
    <FormWrapper className="Main_container">
      <Card className="m-3">
        <div className="m-2">
          <input
            name="allstores"
            style={{ padding: "15px" }}
            type="checkbox"
            onClick={handleCheck}
            onChange={isChecked}
            checked={!checked}
          />{" "}
          All
          <br></br>
          <input
            name="specificstores"
            style={{ padding: "15px" }}
            onClick={handleCheck}
            type="checkbox"
            onChange={isChecked}
            checked={checked}
          />{" "}
          Specific
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
        outline
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </FormWrapper>
  );
}

export default App;

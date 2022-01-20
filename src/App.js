import { useState } from "react";
import "./App.css";
import FormWrapper from "./Components/FormWrapper";
import Selector from "./Components/Inputs/Select";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [viewSelect, setViewSelect] = useState(false);
  // const [resources, setResources] = useState(jsonData);

  const handleAllCheck = (e) => {
    let isChecked = e.target.checked;
    if (isChecked === true) {
      console.log("hy");
      setViewSelect(false);
    }
  };

  const handleCheck = (e) => {
    setViewSelect(!viewSelect);
  };

  return (
    <FormWrapper className="Main_container">
      {/* {map(resources, (resource, resourceIndex) => {
        console.log(resource);
        console.log(resourceIndex);
        return (
          <div key={"resouce_key" + resourceIndex}>
            <CheckBox resource={{ ...resource, resourceIndex }} />
          </div>
        );
      })} */}
      <input
        style={{ padding: "15px" }}
        type="checkbox"
        onClick={handleAllCheck}
      />{" "}
      All
      <br></br>
      <input
        style={{ padding: "15px" }}
        onClick={handleCheck}
        type="checkbox"
      />{" "}
      Specific
      <br />
      {viewSelect && <Selector viewSelect={viewSelect} />}
    </FormWrapper>
  );
}

export default App;

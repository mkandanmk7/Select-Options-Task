import { useState } from "react";
import "./App.css";
import FormWrapper from "./Components/FormWrapper";
import Selector from "./Components/Inputs/Select";

function App() {
  const [viewSelect, setViewSelect] = useState(false);
  // const [resources, setResources] = useState(jsonData);

  const hanleCheck = (e) => {
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
      <input type="checkbox" /> All
      <br></br>
      <input onClick={hanleCheck} type="checkbox" /> Specific
      <br />
      {viewSelect && (
        <Selector viewSelect={viewSelect} onChange={handleSelector} />
      )}
    </FormWrapper>
  );
}

export default App;

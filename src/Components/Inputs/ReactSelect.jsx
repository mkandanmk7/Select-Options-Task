import React from "react";
import Select from "react-select";

const ReactSelect = ({
  selectedStoresCount,
  totalStoresCount,
  selectedStores,
  options,
  handleSelect,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default ReactSelect;

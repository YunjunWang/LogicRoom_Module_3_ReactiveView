import React, { useState } from "react";
import { presenter } from "../../Presenter";
import { observe } from "mobx";

const ChildComponent = (props) => {
  // binding output goes here
  const [vm, setViewModel] = useState({});

  return (
    <>
      <input
        value={vm.fName}
        onChange={(event) => {
          setViewModel({
            ...vm,
            fName: event.target.value
          });
        }}
      />

      <input
        type={"button"}
        value={"update"}
        onClick={() => {
          presenter.submit(vm);
        }}
      />
    </>
  );
};

export default ChildComponent;

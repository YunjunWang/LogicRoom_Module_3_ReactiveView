import React, { useState } from "react";
import { presenter } from "../Presenter";
import { observe } from "mobx";
import ChildChildComponent from "./ChildChild/ChildChildComponent";

const ChildComponent = (props) => {
  const [vm, setViewModel] = useState({});

  React.useEffect(() => {
    async function load() {
      observe(presenter, "viewModel", (obj) => {
        setViewModel(obj.newValue);
      });
      await presenter.load();
    }
    load();
  }, []);
  return (
    <>
      <h3>
        Reactive Parent Component (1-way [{props.vm}
        ])
      </h3>
      <p>
        {props.vm.indexOf("down") > -1 ? "Hello your name is " + vm.fName : ""}
      </p>
      {props.vm.indexOf("up") > -1 ? (
        <ChildChildComponent vm="vm.fName"></ChildChildComponent>
      ) : (
        <></>
      )}
    </>
  );
};

export default ChildComponent;

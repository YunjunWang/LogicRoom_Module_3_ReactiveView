import React, { useState } from "react";
import { render } from "react-dom";
import { presenter } from "./Presenter";
import { observe } from "mobx";
import ChildComponent from "./Child/ChildComponent";

function App() {
  const [vm, setViewModel] = useState({});

  return (
    <>
      {/* <h3>Reactive Parent Component (1-way [up & down])</h3>
      {viewModel.formattedString}

      <br />
      <br />

      <input
        value={viewModel.fName}
        onChange={(event) => {
          setViewModel({
            ...viewModel,
            fName: event.target.value
          });
        }}
      />
      <input
        value={viewModel.lName}
        onChange={(event) => {
          setViewModel({
            ...viewModel,
            lName: event.target.value
          });
        }}
      />

      <input
        type={"button"}
        value={"update"}
        onClick={() => {
          presenter.submit(viewModel);
        }}
      /> */}

      {<ChildComponent vm="down&up"></ChildComponent>}
      {<ChildComponent vm="down"></ChildComponent>}
      {<ChildComponent vm="up"></ChildComponent>}
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

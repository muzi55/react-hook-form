import React from "react";
import FormOne from "../components/FormOne";
import FormTwo from "../components/FormTwo";
import FormThree from "../components/FormThree";
import FormFour from "../components/FormFour";

const Study = (): JSX.Element => {
  return (
    <>
      <h1>리액트 훅 폼 공부</h1>
      <FormOne />
      <hr />

      <FormTwo />
      <hr />

      <FormThree />
      <hr />

      <FormFour />
    </>
  );
};

export default Study;

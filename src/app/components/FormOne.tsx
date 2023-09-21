"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
interface Form {
  name: string;
}

const FormOne = (): JSX.Element => {
  const [result, setResult] = useState("");
  const { register, handleSubmit, watch, formState } = useForm();

  const onSubmit = (data: Form) => setResult(data.name);

  return (
    <>
      <h2>리액트 훅 폼</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" {...register("name")} />
          <button>전송</button>
        </div>
        {result && <span> 결과값 : {result}</span>}
      </form>
    </>
  );
};

export default FormOne;

"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormTwo = (): JSX.Element => {
  const [result, setResult] = useState({
    fitstName: "",
    secondName: "",
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setResult({
      fitstName: data.firstName,
      secondName: data.secondName,
    });
  };
  console.log(result);
  return (
    <>
      <h2>form one</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <select {...register("firstName")}>
            <option value="김">김</option>
            <option value="박">박</option>
            <option value="말">말</option>
            <option value="흉">흉</option>
          </select>
          <input type="text" {...register("secondName")} />
          <input type="submit" value="전송" />
        </div>
        {result && (
          <span>
            {result.fitstName}
            {result.secondName}
          </span>
        )}
      </form>
    </>
  );
};

export default FormTwo;

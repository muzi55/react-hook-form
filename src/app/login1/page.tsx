'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Form {
  ID: string;
  PASSWORD: string;
}
const Example = (): JSX.Element => {
  const [result, setResult] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Form) => setResult(JSON.stringify(data));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("ID")} placeholder="ID" />
        <input type="password" {...register("PASSWORD")} placeholder="PASSWORD" />
        <input type="submit" value="전송" />
        <p>{result}</p>
      </form>
    </>
  );
};

export default Example;

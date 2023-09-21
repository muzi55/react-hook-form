"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
interface Props {}

const FormThree = ({}: Props): JSX.Element => {
  const [result, setResult] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    setResult("유효성 검사 통과");
  };
  return (
    <>
      <h2>유효성 검사</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("input1", { required: true, maxLength: 5 })} placeholder="필수값 5글자 이하" />
          <input {...register("input2", { required: true, minLength: 2 })} placeholder="필수값 2글자 이상" />
          <input {...register("input3", { pattern: /^[A-Za-z]+$/i })} placeholder="영문 알파벳 대문자와 소문자로만" />
          <input type="number" {...register("input4", { required: true, minLength: 2, maxLength: 4, min: 20, max: 500 })} placeholder="필수값, 최소글자2, 최대글자4, 최소값20, 최대값500" />
          <input type="number" {...register("input5", { maxLength: 6, min: 5, max: 855429 })} placeholder="최대글자6, 최소값5, 최대값20" />
          <input type="submit" value="전송" />
        </div>
        <p>{result}</p>
      </form>
    </>
  );
};

export default FormThree;

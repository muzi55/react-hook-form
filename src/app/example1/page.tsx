"use client";
import React from "react";
import { useForm } from "react-hook-form";
const Example1 = (): JSX.Element => {
  const { register, watch } = useForm();

  const watchNickName = watch("nickname", "muzi");
  console.log(watchNickName);
  return (
    <>
      <h2>watch 함수 사용방법</h2>
      <form>
        <input type="text" {...register("nickname")} placeholder="nickname" />
        <p>{watchNickName}</p>
      </form>
    </>
  );
};

export default Example1;

"use client";
import React from "react";
import { useForm } from "react-hook-form";
const Example1 = (): JSX.Element => {
  const { register, watch } = useForm();

  const watchNickName = watch("nickname", "muzi");
  const watchName = watch("name", false);
  
  return (
    <>
      <h2>watch 함수 사용방법</h2>
      <p>watch(names: string | string[] | (data, options) => unknown) </p>
      <p>이 메서드는 지정된 입력을 감시하고, 해당 값을 반환합니다. 입력 값을 렌더링하고 조건별로 무엇을 렌더링할지 결정하는데 유용합니다.</p>
      <form>
        <input type="text" {...register("nickname")} placeholder="nickname" />
        <p>{watchNickName}</p>
      </form>
      <form>
        <input type="text" {...register("name")} placeholder="name" />
        <p>{watchName}</p>
      </form>
    </>
  );
};

export default Example1;

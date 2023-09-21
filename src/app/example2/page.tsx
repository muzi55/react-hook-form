"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
interface Form {
  id: string;
  pw: string;
}
const Example2 = (): JSX.Element => {
  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      userId: "",
      userPw: "",
    },
  });
  const onSubmit = (data: Form) => {
    setResult(JSON.stringify(data));
  };

  return (
    <>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" {...register("userId", { required: true, minLength: 2, maxLength: 12, pattern: /^[a-zA-Z0-9]+$/ })} placeholder="id" />
          <div className="h-8">
            {errors.userId?.type === "pattern" && <p className="text-red-300">영어 대문자, 소문자, 숫자만 가능합니다.</p>}
            {errors.userId?.type === "minLength" && <p className="text-red-300">2글자 이상, 12글자 이하입니다.</p>}
            {errors.userId?.type === "maxLength" && <p className="text-red-300">2글자 이상, 12글자 이하입니다.</p>}
            {errors.userId?.type === "required" && <p className="text-red-300">필수 입력값입니다.</p>}
          </div>
        </div>
        <div>
          <input type="text" {...register("userPw", { required: true, minLength: 2, maxLength: 12, pattern: /^[a-zA-Z0-9]+$/ })} placeholder="pw" />
          <div className="h-8">
            {errors.userPw?.type === "pattern" && <p className="text-red-300">영어 대문자, 소문자, 숫자만 가능합니다.</p>}
            {errors.userPw?.type === "minLength" && <p className="text-red-300">2글자 이상, 12글자 이하입니다.</p>}
            {errors.userPw?.type === "maxLength" && <p className="text-red-300">2글자 이상, 12글자 이하입니다.</p>}
            {errors.userPw?.type === "required" && <p className="text-red-300">필수 입력값입니다.</p>}
          </div>
        </div>
        <button type="submit">로그인</button>
      </form>
      <p>{result}</p>
    </>
  );
};

export default Example2;

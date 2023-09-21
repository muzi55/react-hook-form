"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
interface Form {
  age: number;
}

const FormFour = (): JSX.Element => {
  const [result, setResult] = useState<number>();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: Form) => {
    setResult(data.age);
  };

  return (
    <>
      <h2>에러메세지</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="age" // 유니크 한 값
          control={control} // 유즈폼을 호출하는 역할
          defaultValue={33} // 기본값
          rules={{ required: true, min: 5, max: 99, maxLength: 2 }} // 조건
          render={({ field }) => <input type="number" {...field} />} // 렌더될 prop을 설정함 field를 받아서 input에 prop으로 전달함
        />
        <input type="submit" value="전송" />
        {errors.age?.type === "required" && <p className="text-red-300">필수 입력값입니다.</p>}
        {errors.age?.type === "min" && <p className="text-red-300">5보다 커야합니다</p>}
        {errors.age?.type === "max" && <p className="text-red-300">99보다 작아야합니다.</p>}
        {result && <p>결과값 : {result}</p>}
      </form>
    </>
  );
};

export default FormFour;

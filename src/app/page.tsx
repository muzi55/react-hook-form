import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        <Link className="text-[30px] ml-8 bg-red-200" href={"study"}>
          훅 사용예제
        </Link>
      </p>
      <p>
        <Link className="text-[30px] ml-8 bg-red-200" href="login1">
          로그인1
        </Link>
      </p>
    </>
  );
}

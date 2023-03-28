import Link from "next/link";

export default function Main() {
  return (
    <div
      style={{
        borderRadius: "32% 58% 69% 43% / 48% 32% 59% 55%",
        transition: "0.5s",
      }}
      className="square "
    >
      <span
        style={{
          borderRadius: "32% 58% 69% 43% / 48% 32% 59% 55%",
          transition: "0.5s",
        }}
        className="absolute top-0 left-0 w-full h-full border-black border-2 animate-spin-slow circle"
      ></span>
      <span
        style={{
          borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
          transition: "0.5s",
        }}
        className="absolute top-0 left-0 w-full h-full border-black border-2  animate-spin-slow-2 circle"
      ></span>
      <span
        style={{
          borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
          transition: "0.5s",
        }}
        className="absolute top-0 left-0 w-full h-full border-black border-2 animate-spin-slow-3 circle"
      ></span>
      <div
        style={{
          transition: "0.5s",
        }}
        className="content"
      >
        <h1 className="text-xl text-white dark:text-white sm:text-3xl">
          안녕하세요
        </h1>
        <p className="text-lg text-white dark:text-white  sm:text-xl">
          FrontEnd Developer 꿈꾸는
        </p>
        <p className="text-lg text-white dark:text-white  sm:text-xl">
          박현석의 포트폴리오 사이트입니다.
        </p>
        <Link
          href="/home"
          className="relative inline-block mt-2 border-2 border-white px-2 py-5 text-white dark:text-white font-semibold hover:bg-white hover:text-black dark:hover:text-black"
          style={{
            borderRadius: "73% 27% 44% 56% / 49% 44% 56% 51%",
            transition: "0.2s",
          }}
        >
          Home 가기
        </Link>
      </div>
    </div>
  );
}

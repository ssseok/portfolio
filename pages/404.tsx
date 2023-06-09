import Error from "@/components/error/error";
import Seo from "@/components/seo";
import type { NextPage } from "next";
import Link from "next/link";

const PageNotFound: NextPage = () => {
  return (
    <>
      <Seo title="Error" content="Error" />
      <Error />
      <div className="flex justify-center flex-col items-center">
        <h1 className="font-bold text-xl">페이지를 찾을 수 없습니다.</h1>
        <p className="text-lg  mb-3">
          입력하신 페이지의 주소가 정확한지 다시 확인해주세요.
        </p>
        <Link href="/" className="link-btn">
          메인 바로가기
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;

import Error from "@/components/error/error";
import Seo from "@/components/seo";
import type { NextPage } from "next";
import Link from "next/link";

const PageNotFound: NextPage = () => {
  return (
    <>
      <Seo title="Error" content="Error" />
      <Error />
      <div className="flex justify-center">
        <Link
          href="/"
          className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          메인 바로가기
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;

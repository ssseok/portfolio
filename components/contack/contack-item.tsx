import Image from "next/image";
import profile from "../../public/hyunseok.jpeg";
import { motion } from "framer-motion";

export default function ContackItem() {
  const box = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
    exit: {},
  };
  return (
    <section className="text-gray-600 body-font">
      <motion.div
        variants={box}
        initial="initial"
        animate="visible"
        className="container mx-auto flex px-5 py-24 items-center justify-center flex-col gap-5"
      >
        <div className="lg:w-1/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow-xl shadow-violet-200  dark:shadow-slate-500">
          <Image src={profile} alt="박현석 프로필" className="rounded-xl" />
        </div>
        <div className="flex flex-col flex-wrap -mb-10 lg:text-left text-center">
          <div className="flex mb-5 items-center flex-row justify-between">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-violet-200 text-violet-700 dark:text-violet-800">
              <svg
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="cls-2"
                  d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                />
              </svg>
            </div>
            <div className="ml-5">
              <a
                href="mailto:dev.luckseok1@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2
                  className="text-gray-900 font-medium text-xl hover:underline transition duration-300 transform 
                    hover:scale-[1.02] hover:text-violet-600 dark:hover:text-violet-400"
                >
                  luckseok1@gmail.com
                </h2>
              </a>
            </div>
          </div>

          <div className="flex mb-5 items-center flex-row">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-violet-200 text-violet-700  dark:text-violet-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />{" "}
              </svg>
            </div>
            <div className="ml-5">
              <a
                href="https://github.com/ssseok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2
                  className="text-gray-900 font-medium text-xl hover:underline transition duration-300 transform 
                    hover:scale-[1.02] hover:text-violet-600 dark:hover:text-violet-400"
                >
                  깃허브 바로가기
                </h2>
              </a>
            </div>
          </div>
          <div className="flex mb-5 items-center flex-row">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-violet-200 text-violet-700  dark:text-violet-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M29.913 13.919c-0.113-0.5-0.425-0.962-0.781-1.156-0.113-0.063-0.813-0.137-1.563-0.169-1.256-0.056-1.394-0.081-1.794-0.313-0.631-0.369-0.8-0.769-0.806-1.844-0.006-2.063-0.863-3.981-2.556-5.706-1.206-1.231-2.556-2.063-4.094-2.531-0.369-0.113-1.194-0.15-3.956-0.181-4.338-0.050-5.3 0.037-6.775 0.625-2.719 1.075-4.669 3.363-5.381 6.287-0.131 0.55-0.163 1.431-0.194 6.494-0.037 6.344 0.006 7.275 0.4 8.531 0.975 3.1 3.744 5.394 6.525 5.894 0.925 0.169 12.331 0.206 13.5 0.050 2.031-0.275 3.625-1.094 5.119-2.619 1.081-1.106 1.756-2.3 2.2-3.881 0.306-1.1 0.281-8.925 0.156-9.481zM9.781 9.944c0.488-0.494 0.625-0.513 3.675-0.513 2.744 0 2.837 0.006 3.238 0.213 0.581 0.294 0.837 0.706 0.837 1.369 0 0.594-0.238 1.012-0.769 1.35-0.287 0.181-0.456 0.194-3.144 0.206-1.656 0.012-2.981-0.025-3.175-0.075-1.038-0.294-1.425-1.781-0.663-2.55zM21.769 22.431l-0.931 0.15-4.844 0.056c-4.256 0.050-5.456-0.025-5.681-0.125-0.444-0.194-0.863-0.731-0.931-1.212-0.069-0.456 0.162-1.081 0.512-1.4 0.444-0.4 0.637-0.412 6.081-0.419 5.6-0.006 5.569-0.006 6.1 0.488 0.756 0.706 0.594 1.95-0.306 2.462z" />{" "}
              </svg>
            </div>
            <div className="ml-5">
              <a
                href="https://luckseok.tistory.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2
                  className="text-gray-900 font-medium text-xl hover:underline transition duration-300 transform 
                    hover:scale-[1.02] hover:text-violet-600  dark:hover:text-violet-400"
                >
                  블로그 바로가기
                </h2>
              </a>
            </div>
          </div>
          <div className="flex mb-5 items-center flex-row">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-violet-200 text-violet-700  dark:text-violet-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
              </svg>
            </div>
            <div className="ml-5">
              <a
                href="https://www.linkedin.com/in/%ED%98%84%EC%84%9D-%EB%B0%95-a9179a243/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2
                  className="text-gray-900 font-medium text-xl hover:underline transition duration-300 transform 
                    hover:scale-[1.02] hover:text-violet-600 dark:hover:text-violet-400"
                >
                  링크드인 바로가기
                </h2>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

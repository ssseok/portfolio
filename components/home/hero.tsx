import Link from "next/link";
import Animation from "./animation";
import Typical from "react-typical";
import { motion } from "framer-motion";

export default function Hero() {
  const box = {
    initial: {
      opacity: 0,
      // scale: 0,
    },
    visible: {
      opacity: 1,
      // scale: 1,
      transition: {
        duration: 3,
      },
    },
    exit: {},
  };
  return (
    <>
      <motion.div
        variants={box}
        initial="initial"
        animate="visible"
        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <div className="py-10">
          <p className="text-black dark:text-white text-3xl md:text-5xl">
            안녕하세요!
            <br />
            <Typical
              steps={[
                "Frontend",
                1500,
                "협업",
                1500,
                "Typescript",
                1500,
                "새로운 기술 사용",
                1500,
                "React",
                1500,
                "커뮤니케이션",
                1500,
              ]}
              loop={Infinity}
              wrapper="strong"
            />
            <span>를(을) 좋아하는</span>
            <br />
            개발자
            <Typical
              steps={[" 박현석", 2000, " 석이", 2000, " 코딩왕석이", 2000]}
              loop={Infinity}
              wrapper="strong"
            />
            입니다.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2.5 sm:justify-center lg:justify-start">
          <Link
            href="/projects"
            className="inline-flex dark:text-white text-white bg-violet-500 border-0 py-2 px-6  focus:outline-none hover:bg-violet-600 rounded text-lg hover:text-white"
          >
            자기소개 보러가기
          </Link>
          <Link
            href="/projects"
            className="inline-flex dark:text-white text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg hover:text-white"
          >
            프로젝트 보러가기
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={box}
        initial="initial"
        animate="visible"
        className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
      >
        <Animation />
      </motion.div>
    </>
  );
}

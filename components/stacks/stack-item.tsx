import Link from "next/link";
import React from "../../public/svg/react.svg";
import Aws from "../../public/svg/aws.svg";
import Next from "../../public/svg/next.svg";
import Js from "../../public/svg/js.svg";
import Ts from "../../public/svg/ts.svg";
import StyledComponents from "../../public/svg/styled-components.svg";
import TailwindCSS from "../../public/svg/tailwind-css.svg";
import Github from "../../public/svg/github.svg";
import Discord from "../../public/svg/discord.svg";
import Notion from "../../public/svg/notion.svg";
import Vercel from "../../public/svg/vercel.svg";
import Figma from "../../public/svg/figma.svg";
import { motion } from "framer-motion";

export default function StackItem() {
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
  const frontSkillsItem = [
    [
      <React key={React} />,
      "React.js",
      "다양한 라이브러리를 사용할 수 있는 React를 주로 사용합니다.",
    ],
    [
      <Next key={Next} />,
      "Next.js",
      "초기 로딩 속도가 빠르고 SEO에 유리한 SSR에 관심이 생겨 공부하고 있습니다.",
    ],
    [
      <Js key={Js} />,
      "JavaScript",
      "ECMAScript의 변화를 꾸준히 살피고 학습합니다.",
    ],
    [
      <Ts key={Js} />,
      "TypeScript",
      "복잡한 프로젝트를 더 빠르고 안정적이게 유지하기 위해서 꾸준히 학습합니다.",
    ],
    [
      <StyledComponents key={StyledComponents} />,
      "Styled-Component",
      "컴포넌트별로 작성하여 직관적으로 확인할 수 있는 장점이 있어서 사용한 경험이 있습니다.",
    ],
    [
      <TailwindCSS key={TailwindCSS} />,
      "TailwindCSS",
      "클래스명 하나로 style을 지정할 수 있는 장점이 있어서 사용한 경험이 있습니다.",
    ],
  ];

  const etcSkillsItem = [
    [<Aws key={Aws} />, "AWS", "AWS S3을 통한 프로젝트 배포 경험이 있습니다."],
    [
      <Github key={Github} />,
      "Github",
      "Git Commit convention을 통한 협업 경험이 있고, 칸반 보드를 활용하여 업무 시각화 경험이 있습니다.",
    ],
    [
      <Discord key={Discord} />,
      "Discord",
      "디스코드를 이용한 소통, 협업 경험이 있습니다.",
    ],
    [
      <Notion key={Notion} />,
      "Notion",
      "노션을 이용한 프로젝트 일정 관리와 회의록 작성을 하는 등 팀 문서를 정리한 경험이 있습니다.",
    ],
    [
      <Figma key={Figma} />,
      "Figma",
      "Figma를 이용한 프로젝트 와이어 프레임, 유저 플로우 제작 경험이 있습니다.",
    ],
    [
      <Vercel key={Vercel} />,
      "Vercel",
      "Vercel을 통한 프로젝트 배포 경험이 있습니다.",
    ],
  ];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              FrontEnd
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              좋은 유저 경험을 위한 기능과 디자인에 집중합니다.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-3/5 md:mx-auto sm:mb-2 ">
            {frontSkillsItem.map((a, idx) => (
              <motion.div
                variants={box}
                initial="initial"
                animate="visible"
                className="p-2 xl:w-1/2 w-full relative "
                key={idx}
              >
                <div className="skill-text">
                  {a[0]}
                  <span className="title-font font-medium text-xl ml-4 dark:text-black">
                    {a[1]}
                  </span>
                </div>
                <div className="skill-cover">
                  <h1 className="title-font font-medium text-xl m-4 dark:text-black">
                    {a[0]}
                  </h1>
                  <p className="leading-relaxed ml-3 p-0 dark:text-black">
                    {a[2]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Etc
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              아래 협업툴을 사용하여 타 포지션(백엔드)과의 협업 경험이 있습니다.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2">
            {etcSkillsItem.map((a, idx) => (
              <motion.div
                variants={box}
                initial="initial"
                animate="visible"
                className="p-2 xl:w-1/2 w-full relative"
                key={idx}
              >
                <div className="skill-text">
                  {a[0]}
                  <span className="title-font font-medium text-xl ml-4 dark:text-black">
                    {a[1]}
                  </span>
                </div>
                <div className="skill-cover">
                  <h1 className="title-font text-xl font-medium dark:text-gray-900 m-4">
                    {a[0]}
                  </h1>
                  <p className="leading-relaxed ml-3 p-0 dark:text-black">
                    {a[2]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col mt-5 sm:flex-row gap-2.5 sm:justify-center lg:justify-start">
            <Link
              href="projects"
              className="inline-flex dark:text-white text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg hover:text-white"
            >
              프로젝트 바로가기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

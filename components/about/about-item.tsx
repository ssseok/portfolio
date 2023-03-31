import Image from "next/image";
import Link from "next/link";
import Typical from "react-typical";
import profile from "../../public/hyunseok.jpeg";
import { motion } from "framer-motion";

export default function AboutItem() {
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
    <section className="">
      <motion.div
        variants={box}
        initial="initial"
        animate="visible"
        className="container mx-auto flex px-5 py-24 items-center justify-center flex-col gap-5"
      >
        <div className="flex xl:flex-row flex-col items-center gap-10 lg:w-4/5 w-full">
          <div className="about-card shadow-xl shadow-violet-200  dark:shadow-slate-500">
            <Image
              src={profile}
              alt="박현석 프로필"
              fill
              className="rounded-xl "
            />
          </div>
          <div className="flex flex-col">
            <div className="py-24 text-2xl">
              <Typical
                steps={["안녕하세요 개발자 박현석입니다."]}
                loop={undefined}
                wrapper="h1"
              />
              <Typical
                steps={["협업 활동", 1500, "커뮤니케이션", 1500]}
                loop={Infinity}
                wrapper="strong"
              />{" "}
              을 좋아하며,
              <br />
              새로운&nbsp;
              <Typical
                steps={["지식 습득", 1500, "기술", 1500]}
                loop={Infinity}
                wrapper="strong"
              />
              을 즐깁니다.
            </div>
            <h1 className="about-h1-text ">🎓 학력</h1>
            <p className="font-semibold text-xl mt-2 text-black dark:text-white">
              코드스테이츠 (Code States)
            </p>
            <p className="text-sm">
              Software Engineering Bootcamp Frontend 41기
            </p>
            <p className="py-3 text-sm">2022.08 ~ 2023.02</p>
            <ul className="list-disc list-inside space-y-2 mb-5">
              <li>
                Pre, Main 두번의 React 프로젝트로 백엔드와 협업을 통해 개발
                경험을 체득
              </li>
              <li>
                혼자 공부하는 것이 아닌 동기들과 소통하며 학습을 진행 하여
                커뮤니티의 중요도 이해
              </li>
              <li>
                프론트 엔드 개발자로서 알아야 할 기초 CS 지식 및
                네트워크,알고리즘 학습
              </li>
              <li>
                기본 HTML5, CSS3, JavaScript 주요 문법등 웹 개발을 위한 내용
                학습
              </li>
            </ul>
            <h1 className="about-h1-text">💼 업무경력</h1>
            <p className="font-semibold text-xl mt-2 text-black dark:text-white">
              대성공업(주)
            </p>
            <p className="text-sm mb-3">LS팀</p>
            <ul className="list-disc list-inside">
              <li>자동차 부품 제조 해외 수출</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-4/5 w-full bg-violet-100 p-7 rounded-lg mt-16 dark:bg-slate-700 shadow-xl shadow-violet-200  dark:shadow-slate-500">
          <h1 className="mb-4 text-xl font-semibold">
            왜 개발자가 되고 싶나요?
          </h1>
          <p className="">
            이전에 저는 생산직으로 다년간 종사를 하였습니다. 생산직에서 종사를
            하면서 하루하루 빠르게 자동화로 바뀌고 있단 생각이 들었습니다. 그
            배경에는 IT분야의 발전이 존재한다는 것을 깨달았고 모든 시장에서 IT란
            이미 빼놓을 수 없는 분야이며 머지 않아 일상의 모든 것이 온라인
            시장에서 이루어질 거라 짐작이 되었습니다. 그리고 이렇게 기술발전이
            이뤄지는 세상에 기여하는 사람이 되고 싶어 개발자의 길로 들어서게
            되었습니다.
          </p>
          <h1 className="my-4 text-xl font-semibold">
            어떤 개발자가 되고 싶나요?
          </h1>
          <p className="">
            저는 개발자로써 제일 주요 덕목 중 하나가 소통이라고 생각합니다. 팀
            구성원, 이해관계자 및 고객과 의견 차이가 발생할 수 있고 사고 방식도
            다르기 때문에 그 사이에서 조율을 잘해야 한다고 생각합니다. 어느 한
            사람의 의견도 흘려듣지 않으며 편안한 소통 환경을 조성해 좋은 서비스,
            좋은 조직에서의 일원이 되어서 사용자에게 최고의 UX를 선사할 수 있고
            협업을 같이 하고 싶은 그런 개발자가 되고 싶습니다.
          </p>
        </div>
        <div className="flex flex-col mt-5 sm:flex-row gap-2.5 sm:justify-center lg:justify-start">
          <Link href="/stack" className="link-btn">
            기술스택 보러가기
          </Link>
          <Link href="/projects" className="link-btn">
            프로젝트 보러가기
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

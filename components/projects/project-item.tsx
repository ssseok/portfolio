import { IProjectProps } from "@/types/project";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectItem({
  data: { properties, cover },
}: IProjectProps) {
  const title = properties.Name.title[0].plain_text;
  const link = properties.Link?.url;
  const video = properties.Video?.url;
  const description = properties.Description?.rich_text[0]?.plain_text;
  const img = cover.external?.url || cover.file.url;
  const stack = properties.Stack?.multi_select;
  const startDate = properties.Date?.date?.start;
  const endDate = properties.Date?.date?.end;
  const project = properties.Project.rich_text[0].plain_text;
  const git = properties.Git?.url;
  const notion = properties.Notion?.url;

  const calculatedPeriod = (start: any, end: any) => {
    // 받아온 start, end 인자들 데이터 값을 보면 ****-**-** 으로 되어있어 split으로 - 뺀 나머지를 배열로 만든다.
    // 예를들어 [****, **, **] 이런식으로 배열이 만들어진다.
    const startDateArray = start?.split("-");
    const endDateArray = end?.split("-");

    // 그리고 배열 안에 하나하나 날짜로 변경
    let startDate: any = new Date(
      startDateArray[0],
      startDateArray[1],
      startDateArray[2]
    );
    let endDate: any = new Date(
      endDateArray[0],
      endDateArray[1],
      endDateArray[2]
    );

    // 지나간 시간(end) 시작된 시간(start) 계산
    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);
    console.log(result);

    return result;
  };

  const box = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 3,
      },
    },
    exit: {},
    hover: {
      scale: 1.02,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      whileHover="hover"
      variants={box}
      initial="initial"
      animate="visible"
      className="flex flex-col m-3 bg-violet-100 dark:bg-slate-700 border rounded-t-xl rounded-xl grid-element"
    >
      <a target="_blank" href={link}>
        <Image
          src={img}
          alt="cover-image"
          fill
          quality={100}
          className="rounded-t-xl"
        />
      </a>
      <div className="p-4 flex flex-col">
        <h1 className="py-3 font-bold text-2xl">{title}</h1>
        <h3 className="py-2 font-semibold text-lg">{description}</h3>
        <p className="py-2">{project}</p>
        <div className="flex flex-col space-y-2 py-2">
          <a target="_blank" href={git}>
            🔗 깃허브 바로가기
          </a>
          <a target="_blank" href={link}>
            🔗 배포 바로가기
          </a>
          {notion && (
            <a target="_blank" href={notion}>
              🔗 노션 바로가기
            </a>
          )}
          {video && (
            <a target="_blank" href={video}>
              🔗 시연영상 바로가기
            </a>
          )}
        </div>
        <h3 className="py-2 text-slate-700">
          작업기간 : {startDate} ~ {endDate} (
          {calculatedPeriod(startDate, endDate)}일)
        </h3>

        <div className="flex items-start mt-2">
          {stack.map((tag: IProjectProps) => (
            <h1
              className="px-2 py-1 text-white mr-2 rounded-md bg-violet-500 dark:bg-violet-300 dark:text-white"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

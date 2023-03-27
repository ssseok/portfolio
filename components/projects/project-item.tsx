import { IProjectProps } from "@/types/project";
import Image from "next/image";

export default function ProjectItem({
  data: { properties, cover },
}: IProjectProps) {
  const title = properties.Name.title[0].plain_text;
  const link = properties.Link?.url;
  const video = properties.Video.url;
  const description = properties.Description.rich_text[0].plain_text;
  const img = cover.external.url;
  const skill = properties.Skills.multi_select;
  const startDate = properties.Date.date.start;
  const endDate = properties.Date.date.end;

  const calculatedPeriod = (start: any, end: any) => {
    // 받아온 start, end 인자들 데이터 값을 보면 ****-**-** 으로 되어있어 split으로 - 뺀 나머지를 배열로 만든다.
    // 예를들어 [****, **, **] 이런식으로 배열이 만들어진다.
    const startDateArray = start.split("-");
    const endDateArray = end.split("-");

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

  return (
    <div className="flex flex-col m-3 bg-slate-700 rounded-md grid-element">
      <Image
        src={img}
        alt="cover-image"
        fill
        quality={100}
        className="rounded-t-xl"
      />
      <div className="p-4 flex flex-col">
        <h1>{title}</h1>
        <h3>{description}</h3>
        <h3>
          작업기간 : {startDate} ~ {endDate} (
          {calculatedPeriod(startDate, endDate)}일)
        </h3>
        <div className="flex items-start mt-2">
          {skill.map((tag: IProjectProps) => (
            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200" key={tag.id}>
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

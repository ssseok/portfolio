import Layout from "@/components/layout";
import type { NextPage } from "next";

import axios from "axios";
import { IProjectProps, IProjects } from "@/types/project";
import ProjectItem from "@/components/projects/project-item";
import Seo from "@/components/seo";
import Typical from "react-typical";

const Projects: NextPage = ({ project }: IProjectProps) => {
  return (
    <Layout>
      <Seo title="Projects" content="Projects" />
      <h1 className="text-4xl sm:text-6xl py-5 flex justify-center text-slate-800 ">
        <Typical
          steps={[`나의 프로젝트`, 2000]}
          // loop={Infinity}
          wrapper="strong"
        />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 sm:w-full ">
        {project.map((aProject: IProjects) => (
          <ProjectItem key={aProject.id} data={aProject} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;

// getStaticProps => 처음 렌더링 될 때 가져온다.
export async function getStaticProps() {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    data: {
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
      page_size: 100,
    },
  };

  const res = await axios.request(options);
  const project = await res.data.results;
  //   const projects = await res.data.results.map((project: IProjects) => project);

  return {
    props: { project },
  };
}

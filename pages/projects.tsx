import Layout from "@/components/layout";
import type { NextPage } from "next";

import axios from "axios";
import { IProjectProps, IProjects } from "@/types/project";
import ProjectItem from "@/components/projects/project-item";
import Seo from "@/components/seo";

const Projects: NextPage = ({ project }: IProjectProps) => {
  console.log(project);
  return (
    <Layout>
      <Seo title="Projects" content="Projects" />
      {project.map((aProject: IProjects) => (
        <ProjectItem key={aProject.id} data={aProject} />
      ))}
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
          property: "Name",
          direction: "ascending",
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

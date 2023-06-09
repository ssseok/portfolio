import Layout from "@/components/layout";
import Seo from "@/components/seo";
import type { NextPage } from "next";
import Typical from "react-typical";
import StackItem from "@/components/stacks/stack-item";

const Stack: NextPage = () => {
  return (
    <Layout>
      <Seo title="Stack" content="Stack" />
      <h1 className="typical">
        <Typical steps={[`기술스택`]} loop={undefined} wrapper="strong" />
      </h1>
      <StackItem />
    </Layout>
  );
};

export default Stack;

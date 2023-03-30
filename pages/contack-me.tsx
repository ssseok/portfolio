import ContackItem from "@/components/contack/contack-item";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import type { NextPage } from "next";

const ContackMe: NextPage = () => {
  return (
    <Layout>
      <Seo title="Contack Me" content="Contack Me" />
      <ContackItem />
    </Layout>
  );
};

export default ContackMe;

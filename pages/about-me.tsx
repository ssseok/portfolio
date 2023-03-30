import AboutItem from "@/components/about/about-item";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import type { NextPage } from "next";

const AboutMe: NextPage = () => {
  return (
    <Layout>
      <Seo title="About" content="About" />
      <AboutItem />
    </Layout>
  );
};

export default AboutMe;

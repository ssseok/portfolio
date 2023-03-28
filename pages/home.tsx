import Hero from "@/components/home/hero";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo title="Home" content="Home" />
      <section className=" flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
};

export default Home;

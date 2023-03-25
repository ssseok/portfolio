import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Hero from "@/components/home/hero";
import Seo from "@/components/seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Seo title="Portfolio" content="Portfolio" />
      <section className=" flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}

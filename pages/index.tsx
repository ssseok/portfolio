import { Inter } from "next/font/google";
import Seo from "@/components/seo";
import Main from "@/components/main";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-violet-100">
      <Seo title="Portfolio" content="Protfolio" />
      <Main />
    </div>
  );
}

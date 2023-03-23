import React from "react";
import Header from "./header";
import Footer from "./footer";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

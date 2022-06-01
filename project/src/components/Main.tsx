import React from "react";

import { Footer } from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <main className="main">
      <div className="main--header">
        <h1 className="title">
          Child Labor : Statistics and Information Dashboard of Labor Inspection
          in Brazil
        </h1>
      </div>

      <div className="main--body">
        <div className="container-flex">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

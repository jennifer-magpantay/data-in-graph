import React from "react";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { ColumnContainer } from "../components/ColumnContainer";
import { Intro } from "../components/Intro";
import { Cards } from "../components/Cards";
import { LineGraph } from "../components/LineGraph";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Aside />
      <Main>
        <ColumnContainer width="w-3/4" style="pr-5">
          <Intro />
          <LineGraph />
        </ColumnContainer>

        <ColumnContainer width="w-1/4">
          <Cards />
        </ColumnContainer>
      </Main>
    </div>
  );
};

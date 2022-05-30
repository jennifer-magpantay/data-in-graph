import React from "react";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Aside />
      <Main />
    </div>
  );
};

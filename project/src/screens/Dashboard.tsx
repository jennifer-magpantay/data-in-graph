import React, { useState, useEffect } from "react";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

import { ColumnContainer } from "../components/ColumnContainer";
import { Intro } from "../components/Intro";
import { Cards } from "../components/Cards";
import { LineGraph } from "../components/LineGraph";

// data
import { childrenAndTeenagersFoundData } from "../data/childrenAndTeenagersFound";
import { inspectionsData } from "../data/inspections";
// types
import {
  InspectionsDataType,
  ChildrenAndTeenagersFoundDataType,
} from "../types/types";

// helpers
import { addId } from "../helpers/addId";

export const Dashboard = () => {
  const [inspections, setInspections] = useState<InspectionsDataType[]>([]);
  const [childrenAndTeenagersFound, setChildrenAndTeenagersFound] = useState<
    ChildrenAndTeenagersFoundDataType[]
  >([]);

  // once page is loaded, set the states
  useEffect(() => {
    const childAndTeenagersData = addId(childrenAndTeenagersFoundData);
    setChildrenAndTeenagersFound(childAndTeenagersData);

    const inspectionsDt = addId(inspectionsData);
    setInspections(inspectionsDt);

    // return () => {}
  }, []);

  return (
    <div className="dashboard">
      <Aside />
      <Main>
        <ColumnContainer width="w-3/4" style="pr-5">
          <Intro />
          <LineGraph
            text="Add text here"
            labels={inspections.map((item) => item.ano)}
            label="Inspections where child labor was found"
            dataset={inspections.map((item) => item.quantidade)}
            color="rgb(255, 99, 132)"
          />
        </ColumnContainer>

        <ColumnContainer width="w-1/4">
          <Cards />
        </ColumnContainer>
      </Main>
    </div>
  );
};

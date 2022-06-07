import { useState, useEffect, SyntheticEvent } from "react";
import { Route, Routes } from "react-router-dom";

import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Main";

import { ColumnContainer } from "../components/ColumnContainer";
import { Card } from "../components/Card";
import { GraphContainer } from "../components/GraphContainer";
import { LineGraph } from "../components/LineGraph";

// data
import { minorsFoundData } from "../data/minorsFound";
import { inspectionsData } from "../data/inspections";

// data
import { routes } from "../routes/routes";

// types
import {
  InspectionsDataType,
  ChildrenAndTeenagersFoundDataType,
} from "../types/types";

// helpers
import { addId } from "../helpers/addId";
import { reduceData } from "../helpers/reduceData";

export const Dashboard = () => {
  const [inspections, setInspections] = useState<InspectionsDataType[]>([]);
  const [minorsFound, setMinorsFound] = useState<
    ChildrenAndTeenagersFoundDataType[]
  >([]);
  const [isDataInspectionDisplayed, setIsDataInspectionDisplayed] = useState<
    boolean | undefined
  >();

  // once page is loaded, set the states
  useEffect(() => {
    const childAndTeenagersData = addId(minorsFoundData);
    setMinorsFound(childAndTeenagersData);

    const inspectionsDt = addId(inspectionsData);
    setInspections(inspectionsDt);

    setIsDataInspectionDisplayed(true);

    // return () => {}
  }, []);

  // handle events
  function handleButtonClick(e: SyntheticEvent<HTMLButtonElement>) {
    const target = e.currentTarget.innerHTML;
    target === "Inspections completed"
      ? setIsDataInspectionDisplayed(true)
      : setIsDataInspectionDisplayed(false);
  }

  return (
    <div className="dashboard">
      <Sidebar />
      <Main>
        {/* routes */}
        <Routes>
          {routes.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Routes>
      </Main>
    </div>
  );
};

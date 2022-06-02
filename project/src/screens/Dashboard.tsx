import React, { useState, useEffect, SyntheticEvent } from "react";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

import { ColumnContainer } from "../components/ColumnContainer";
import { Card } from "../components/Card";
import { LineGraph } from "../components/LineGraph";

// data
import { childrenAndTeenagersFoundData } from "../data/childrenAndTeenagersFound";
import { inspectionsData } from "../data/inspections";
// types
import {
  InspectionsDataType,
  ChildrenAndTeenagersFoundDataType,
  DynamicDataType,
} from "../types/types";

// helpers
import { addId } from "../helpers/addId";
import { reduceData } from "../helpers/reduceData";
import { GraphContainer } from "../components/GraphContainer";
import { formatNumber } from "../helpers/formatNumber";

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
    const childAndTeenagersData = addId(childrenAndTeenagersFoundData);
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
      <Aside />
      <Main>
        <ColumnContainer width="w-3/4" style="pr-5">
          <GraphContainer
            legend={
              isDataInspectionDisplayed
                ? "* Inspection actions in which the Labor Tax Audit found the work of children and adolescents below the minimum age allowed or the work of adolescents between 16 and 17 years old in conditions prohibited by legislation."
                : "* Children and adolescents found by the Labor Tax Audit in a situation of child labor, either below the minimum age allowed for work or, in the case of adolescents between 16 and 17 years of age, in jobs prohibited by law."
            }
          >
            <h3 className="graph--title">
              {isDataInspectionDisplayed
                ? "Inspections completed"
                : "Minors found during inspections"}
            </h3>
            <LineGraph
              // text=""
              displayLabel={false}
              labels={
                isDataInspectionDisplayed
                  ? inspections.map((item) => item.ano)
                  : minorsFound.map((item) => item.ano)
              }
              // label=""
              dataset={
                isDataInspectionDisplayed
                  ? inspections.map((item) => item.quantidade)
                  : minorsFound.map((item) => item.quantidade)
              }
              color={isDataInspectionDisplayed ? "#1e3799" : "#079992"}
            />
          </GraphContainer>
        </ColumnContainer>

        <ColumnContainer width="w-1/4" style="h-full flex flex-col">
          <button className="w-full" onClick={(e) => handleButtonClick(e)}>
            Inspections completed
          </button>
          <button className="w-full" onClick={(e) => handleButtonClick(e)}>
            Minors found
          </button>

          <Card
            title={
              isDataInspectionDisplayed
                ? "Total of inspections completed in the period *"
                : "Total of minors found during inspections *"
            }
            content={
              isDataInspectionDisplayed
                ? reduceData(inspections, "quantidade")
                : reduceData(minorsFound, "quantidade")
            }
          />
          <p className="caption">
            * The data presented in the graphs are from 01/2017 to 04/2022
          </p>
          {/* <Card
            title="Total of children and teenagers found"
            content={reduceData(childrenAndTeenagersFound, "quantidade")}
          /> */}
        </ColumnContainer>
      </Main>
    </div>
  );
};

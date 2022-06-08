import { useState, useEffect, SyntheticEvent } from "react";
import { ColumnContainer } from "../components/ColumnContainer";
import { Card } from "../components/Card";
import { GraphContainer } from "../components/GraphContainer";
import { LineGraph } from "../components/LineGraph";

// types
import {
  InspectionsCompletedDataType,
  MinorsFoundDataType,
} from "../types/types";

// data
import { minorsFoundData } from "../data/minorsFound";
import { inspectionsCompleted } from "../data/inspectionsCompleted";

// helpers
import { addId } from "../helpers/addId";
import { reduceData } from "../helpers/reduceData";
import { formatNumber } from "../helpers/formatNumber";

export function Overview() {
  const [inspections, setInspections] = useState<
    InspectionsCompletedDataType[]
  >([]);
  const [minorsFound, setMinorsFound] = useState<MinorsFoundDataType[]>([]);
  const [isDataInspectionDisplayed, setIsDataInspectionDisplayed] = useState<
    boolean | undefined
  >();

  // once component is loaded, set the states
  useEffect(() => {
    const childAndTeenagersData = addId(minorsFoundData);
    setMinorsFound(childAndTeenagersData);

    const inspectionsDt = addId(inspectionsCompleted);
    console.log(inspectionsDt);
    setInspections(inspectionsDt);

    setIsDataInspectionDisplayed(true);

    // return () => {}
  }, []);

  console.log(inspections);

  // handle events
  function handleButtonClick(e: SyntheticEvent<HTMLButtonElement>) {
    const target = e.currentTarget.innerHTML;
    target === "Inspections completed"
      ? setIsDataInspectionDisplayed(true)
      : setIsDataInspectionDisplayed(false);
  }
  return (
    <div className="container-flex">
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
              ? "Inspections completed *"
              : "Minors found during inspections *"}
          </h3>
          <LineGraph
            displayLabel={false}
            labels={
              isDataInspectionDisplayed
                ? inspections.map((item) => item.Ano)
                : minorsFound.map((item) => item.Ano)
            }
            dataset={
              isDataInspectionDisplayed
                ? inspections.map((item) => item.Quantidade_fiscalizações)
                : minorsFound.map((item) => item.Quantidade)
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
          title="Total of inspections completed in the period *"
          content={formatNumber(
            reduceData(inspections, "Quantidade_fiscalizações")
          )}
        />
        <Card
          title="Total of minors found during inspections *"
          content={formatNumber(reduceData(minorsFound, "Quantidade"))}
        />
      </ColumnContainer>
    </div>
  );
}

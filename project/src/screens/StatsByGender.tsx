import { useState, useEffect, SyntheticEvent } from "react";

import { Card } from "../components/Card";
import { ColumnContainer } from "../components/ColumnContainer";
import { DoubleBarGraph } from "../components/DoubleBarGraph";
import { GraphContainer } from "../components/GraphContainer";

// data
import { minorsFoundByAgeAndGender } from "../data/minorsFoundByAgeAndGender";

// helpers
import { filterData } from "../helpers/filterData";
import { formatNumber } from "../helpers/formatNumber";
import { reduceData } from "../helpers/reduceData";

// types
import { MinorsFoundByAgeAndGenderDataType } from "../types/types";

export function StatsByGender() {
  const [genderFem, setGenderFem] = useState<
    MinorsFoundByAgeAndGenderDataType[]
  >([]);
  const [genderMasc, setGenderMasc] = useState<
    MinorsFoundByAgeAndGenderDataType[]
  >([]);
  const [isDataByAgeDisplayed, setIsDataByAgeDisplayed] = useState<
    boolean | undefined
  >();

  useEffect(() => {
    const fem = filterData(minorsFoundByAgeAndGender, "Sexo", "F");
    console.log(fem);
    setGenderFem(fem);

    const masc = filterData(minorsFoundByAgeAndGender, "Sexo", "M");
    setGenderMasc(masc);

    setIsDataByAgeDisplayed(true);
  }, []);

  // handle events
  function handleButtonClick(e: SyntheticEvent<HTMLButtonElement>) {
    const target = e.currentTarget.innerHTML;
    target === "Total by Age"
      ? setIsDataByAgeDisplayed(true)
      : setIsDataByAgeDisplayed(false);
  }

  return (
    <div className="container-flex">
      <ColumnContainer width="w-3/4" style="pr-5">
        <GraphContainer
          legend="* Children and teenagers found by the Labor Tax Audit in a situation of
        child labor, either below the minimum age allowed for work or, in the
        case of teenagers between 16 and 17 years of age, in jobs prohibited
        by law."
        >
          <h3 className="graph--title">
            Minors found in child labor by gender *
          </h3>

          <DoubleBarGraph
            indexAxis={isDataByAgeDisplayed ? "x" : "y"}
            displayLabel={true}
            labels={
              isDataByAgeDisplayed ? genderFem.map((item) => item.Idade) : [""]
            }
            labelA="Girls"
            datasetA={
              isDataByAgeDisplayed
                ? genderFem.map((item) => item.Quantidade)
                : [reduceData(genderFem, "Quantidade")]
            }
            colorA="#be123c"
            labelB="Boys"
            datasetB={
              isDataByAgeDisplayed
                ? genderMasc.map((item) => item.Quantidade)
                : [reduceData(genderMasc, "Quantidade")]
            }
            colorB="#0369a1"
          />
        </GraphContainer>
      </ColumnContainer>

      <ColumnContainer width="w-1/4" style="h-full flex flex-col">
        <button className="w-full" onClick={(e) => handleButtonClick(e)}>
          Total by Age
        </button>
        <button className="w-full" onClick={(e) => handleButtonClick(e)}>
          Total by Gender
        </button>

        {/* <Card
          title="Total of minors found*"
          content={formatNumber(
            reduceData(minorsFoundByAgeAndGender, "Quantidade")
          )}
        /> */}
        <Card
          title="Total of girls *"
          content={formatNumber(reduceData(genderFem, "Quantidade"))}
        />
        <Card
          title="Total of boys *"
          content={formatNumber(reduceData(genderMasc, "Quantidade"))}
        />
      </ColumnContainer>
    </div>
  );
}

import { useState, useEffect } from "react";
import { BarGraph } from "../components/BarGraph";
import { GraphContainer } from "../components/GraphContainer";
import { minorsFoundByActivity } from "../data/minorsFoundByActivity";
import { addId } from "../helpers/addId";
import { MinorsFoundByActivityDataType } from "../types/types";

export function StatsByIndustry() {
  const [dataByActivity, setDataByActivity] = useState<
    MinorsFoundByActivityDataType[]
  >([]);

  useEffect(() => {
    const dataWithId = addId(minorsFoundByActivity);
    setDataByActivity(dataWithId);
  }, []);

  return (
    <div className="container-flex">
      <GraphContainer
        legend="* Children and teenagers found by the Labor Tax Audit in a situation of
        child labor, either below the minimum age allowed for work or, in the
        case of teenagers between 16 and 17 years of age, in jobs prohibited
        by law."
      >
        <h3 className="graph--title">
          Minors found in child labor by type of activity *
        </h3>
        <BarGraph
          indexAxis="y"
          displayLabel={false}
          labels={dataByActivity.map((item) => item.Divisão_CNAE)}
          dataset={dataByActivity.map((item) => item.Quantidade)}
          color="#0369a1"
        />
      </GraphContainer>
    </div>
  );
}

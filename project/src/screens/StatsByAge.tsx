import { useEffect, useState } from "react";

import { BarGraph } from "../components/BarGraph";
import { GraphContainer } from "../components/GraphContainer";

// data
import { minorsFoundByAgeAndGender } from "../data/minorsFoundByAgeAndGender";

// helpers
import { addId } from "../helpers/addId";
import { filterData } from "../helpers/filterData";
import { getSetDataList } from "../helpers/getSetDataList";
import { reduceData } from "../helpers/reduceData";

// types
import { StatsByAgeDataType } from "../types/types";

type DataListType = {
  idade: string;
  quantidade: string;
};

export function StatsByAge() {
  const [groupByAge, setGroupByAge] = useState<StatsByAgeDataType[]>([]);

  // once component is loaded, set status
  useEffect(() => {
    const data = groupDataByAge();

    // add ID
    const dataWithId = addId(data);

    // set state
    setGroupByAge(dataWithId);
  }, []);

  function groupDataByAge() {
    // declare and empty array to save the results
    let dataList: DataListType[] = [];

    // set a new list with no duplicated entries
    const list = getSetDataList(minorsFoundByAgeAndGender, "Idade");

    // then, for each item of the list...
    list.forEach((item) => {
      // filter elements
      const filteredData = filterData(minorsFoundByAgeAndGender, "Idade", item);

      // get the total by age on the filtered data
      const age = reduceData(filteredData, "Quantidade");

      // finally, pass the results into an object
      const obj = {
        idade: String(item),
        quantidade: age,
      };
      dataList.push(obj);
    });
    return dataList;
  }

  return (
    <div className="container-flex">
      <GraphContainer
        legend="* Children and teenagers found by the Labor Tax Audit in a situation of
        child labor, either below the minimum age allowed for work or, in the
        case of teenagers between 16 and 17 years of age, in jobs prohibited
        by law."
      >
        <h3 className="graph--title">Minors found in child labor by age *</h3>
        <BarGraph
          displayLabel={false}
          labels={groupByAge.map((item) => item.idade)}
          dataset={groupByAge.map((item) => item.quantidade)}
          color="#075985"
        />
             </GraphContainer>
    </div>
  );
}

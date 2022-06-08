// helpers
import { getSetDataList } from "./getSetDataList";
import { filterData } from "./filterData";
import { reduceData } from "./reduceData";

type DataListType = {
  idade: string;
  quantidade: string;
};

export const groupData = (
  data: any[],
  filterProperty: string,
  reduceProperty: string,
  property: any
) => {
  // declare and empty array to save the results
  let dataList: any = [];

  // set a new list with no duplicated entries
  const list: number[] = getSetDataList(data, property);
  console.log(list);

  // then, for each item of the list...
  list.forEach((item) => {
    // filter elements
    const filteredData = filterData(data, filterProperty, item);
    console.log(filteredData);

    // get the total by age on the filtered data
    const age = reduceData(filteredData, reduceProperty);

    // finally, pass the results into an object
    const obj = {
      idade: item,
      quantidade: age,
    };
    dataList.push(obj);
  });

  return dataList;
};

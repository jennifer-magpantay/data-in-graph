export const filterData = (data: any[], filterProperty: any, property: any) => {
  const filteredData = data.filter((item) => item[filterProperty] === property);
  return filteredData;
};

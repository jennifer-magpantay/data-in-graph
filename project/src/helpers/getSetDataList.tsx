export const getSetDataList = (data: any[], property: any) => {
  const list = data.map((item) => item[property]);
  const setList = Array.from(new Set(list));

  return setList;
};

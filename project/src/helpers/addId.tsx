export const addId = (data: any) => {
  data.map((item: any, index: any) => {
    item.id = index + 1;
    return item;
  });

  return data;
};

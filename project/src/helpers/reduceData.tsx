import { formatNumber } from "./formatNumber";

export const reduceData = (data: any[], property: string) => {
  const result = data.reduce((acc, amount) => {
    return acc + Number(amount[property]);
  }, 0);
  return formatNumber(result);
};

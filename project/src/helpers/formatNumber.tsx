export const formatNumber = (number: number) => {
  const numberFormated = new Intl.NumberFormat("en-GB").format(number);
  return numberFormated;
};

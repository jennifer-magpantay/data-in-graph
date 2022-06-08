export type InspectionsCompletedDataType = {
  id: number;
  Ano: string;
  Quantidade_fiscalizações: string;
};

export type MinorsFoundDataType = {
  id: number;
  Ano: string;
  Quantidade: string;
};

export type MinorsFoundByAgeAndGenderDataType = {
  Idade: string;
  Sexo: "F" | "M";
  Quantidade: string;
};

export type StatsByAgeDataType = {
  id: number;
  idade: string;
  quantidade: string;
};

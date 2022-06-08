export type InspectionsDataType = {
  id: number;
  ano: string;
  quantidade: string;
};

export type ChildrenAndTeenagersFoundDataType = {
  id: number;
  ano: string;
  quantidade: string;
};

export type MinorsFoundByAgeAndGenderDataType = {
  Idade: number;
  Sexo: "F" | "M";
  Quantidade: number;
};

export type StatsByAgeDataType = {
  id: number;
  idade: string;
  quantidade: string;
};

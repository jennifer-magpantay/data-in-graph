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
  idade: number;
  sexo: "F" | "M";
  quantidade: number;
};

export type StatsByAgeDataType = {
  id: number;
  idade: string;
  quantidade: string;
};

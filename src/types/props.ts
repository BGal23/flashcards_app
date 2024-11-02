import { ReactNode } from "react";
import { IFinalObject, IObject } from "./data";

export interface IHeaderProps {
  setMainView: (mainView: string) => void;
  mainView: string;
}

export interface IHeaderButtonProps {
  setMainView: (mainView: string) => void;
  mainView: string;
  activate: string;
  icon: ReactNode;
}

export interface IAddProps {
  test: string;
}

// export interface IListProps {
//   setUsedFilter: (usedFilter: string) => void;
//   usedFilter: string;
// }

export interface IListElementProps {
  element: IFinalObject;
}

export interface ISearchInputProps {
  searchedWord: string;
  setSearchedWord: (searchWord: string) => void;
}

export interface IFiltersProps {
  setUsedFilter: (usedFilter: string) => void;
  usedFilter: string;
}

export interface IFilterButtonProps {
  setUsedFilter: (usedFilter: string) => void;
  usedFilter: string;
  activate: string;
  icon: ReactNode;
}

export interface ILearnProps {
  test: string;
}

export interface ISettingsProps {
  test: string;
}

export interface ITranslateProps {
  test: string;
}

export interface IAddInputProps {
  title: string;
  placeholder: string;
  isDescription: boolean;
  value: string;
  changeValue: (value: string) => void;
  error?: string;
}

export interface IAddButtonProps {
  dataObject: IObject | undefined;
  clearData: (clear: boolean) => void;
  activate: (isActivate: boolean) => void;
  isWordsValidated: boolean;
}

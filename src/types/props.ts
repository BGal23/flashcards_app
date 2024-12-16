import { ReactNode } from "react";
import { IFinalObject, IObject } from "./data";

//COMPONENTS

export interface IHeaderProps {
  setMainView: (mainView: string) => void;
  mainView: string;
}

export interface IAddProps {
  test: string;
}

export interface IListElementProps {
  element: IFinalObject;
}

export interface IFiltersProps {
  setUsedFilter: (usedFilter: string) => void;
  usedFilter: string;
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

//INPUTS

export interface ISearchInputProps {
  searchedWord: string;
  setSearchedWord: (searchWord: string) => void;
}

export interface ICheckInputProps {
  checkedWord: string;
  setCheckedWord: (checkWord: string) => void;
}

export interface IAddInputProps {
  placeholder: string;
  isDescription: boolean;
  value: string;
  changeValue: (value: string) => void;
  error?: string;
  icon?: ReactNode;
}

//BUTTONS

export interface IDeleteButtonProps {
  isShown: boolean;
  setIsShown: (isShown: boolean) => void;
}

export interface ISpinnerButtonProps {
  restartWord: () => void;
  color: string;
}

export interface IAddButtonProps {
  dataObject: IObject | undefined;
  clearData: (clear: boolean) => void;
  activate: (isActivate: boolean) => void;
  isWordsValidated: boolean;
}

export interface ICheckButtonProps {
  wordCheck: () => void;
  isDisabled: boolean;
  title: string;
  color: string;
}

export interface IFilterButtonProps {
  setUsedFilter: (usedFilter: string) => void;
  usedFilter: string;
  activate: string;
  icon: ReactNode;
}

export interface IHeaderButtonProps {
  setMainView: (mainView: string) => void;
  mainView: string;
  activate: string;
  icon: ReactNode;
}

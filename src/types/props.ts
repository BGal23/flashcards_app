import { ReactNode } from "react";
import { IFinalObject, IObject, IUpdateObject } from "./data";

// COMPONENTS

export interface IHeaderProps {
  setMainView: (mainView: string) => void;
  mainView: string;
}

export interface IAddProps {
  test: string;
}

export interface IFiltersProps {
  setUsedFilter: (usedFilter: string) => void;
  usedFilter: string;
}

export interface ILearnProps {
  test: string;
}

export interface ISettingsProps {
  isDarkModeOn: boolean;
  setIsDarkModeOn: (isDarkModeOn: boolean) => void;
}

export interface ITranslateProps {
  test: string;
}

export interface IDarkModeProps {
  isDarkModeOn: boolean;
  setIsDarkModeOn: (isDarkModeOn: boolean) => void;
}

// ELEMENTS

export interface IListElementProps {
  element: IFinalObject;
}

export interface IEditElementProps {
  element: IFinalObject;
  isEdited: boolean;
  isWordsValidated: boolean;
  setIsWordsValidated: (isWordsValidated: boolean) => void;
  originalWord: string;
  learningWord: string;
  descriptionText: string | undefined;
  setOriginalWord: (originalWord: string) => void;
  setLearningWord: (learningWord: string) => void;
  setDescriptionText: (descriptionText: string | undefined) => void;
}

// INPUTS

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

// BUTTONS

export interface IEditButtonProps {
  isEdited: boolean;
  isShownDelete: boolean;
  setIsEdited: (isEdited: boolean) => void;
  isWordsValidated: boolean;
  originalWord: string;
  learningWord: string;
  descriptionText: string | undefined;
  element: IFinalObject;
  updateData: (element: IUpdateObject) => void;
}

export interface IDeleteButtonProps {
  isShownDelete: boolean;
  setIsShownDelete: (isShownDelete: boolean) => void;
  setIsDelete: (isDelete: boolean) => void;
  id: string;
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

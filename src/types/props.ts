import { ReactNode } from "react";
import { IFinalObject, IObject, IUpdateObject } from "./data";

// COMPONENTS

export interface IHeaderProps {
  setMainView: (mainView: string) => void;
  mainView: string;
}

export interface IFiltersProps {
  setUsedFilter: (usedFilter: string) => void;
  usedFilter: string;
}

export interface ILearnProps {
  isShowWrongWord: boolean;
  timeNextWord: number;
  setMainView: (mainView: string) => void;
}

export interface ISettingsProps {
  isDarkModeOn: boolean;
  setIsDarkModeOn: (isDarkModeOn: boolean) => void;
  isShowWrongWord: boolean;
  setIsShowWrongWord: (isShowWrongWord: boolean) => void;
  timeNextWord: number;
  setTimeNextWord: (timeNextWord: number) => void;
}

// SETTINGS

export interface ISettingBooleanElementProps {
  title: string;
  memoryKey: string;
  isTurnOn: boolean;
  setIsTurnOn: (fun: boolean) => void;
}

export interface ISettingTimeElementProps {
  title: string;
  memoryKey: string;
  timeNextWord: number;
  setTimeNextWord: (timeNextWord: number) => void;
}

// ELEMENTS

export interface IListElementProps {
  element: IFinalObject;
}

export interface IEditElementProps {
  isEdited: boolean;
  isWordsValidated: boolean;
  setIsWordsValidated: (isWordsValidated: boolean) => void;
  originalWord: string;
  learningWord: string;
  descriptionText: string | undefined;
  setOriginalWord: (originalWord: string) => void;
  setLearningWord: (learningWord: string) => void;
  setDescriptionText: (descriptionText: string | undefined) => void;
  isActive: boolean;
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
  id: string;
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
  correctWord: () => void;
  color: string;
  time: number;
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

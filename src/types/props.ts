import { ReactNode } from "react";
import { IObject, IUpdateObject } from "./data";

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

export interface ISettingClearDataProps {
  title: string;
  memoryKey: string;
}

// MODAL

export interface IPopUpProps {
  color: string;
  text: string;
  time: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// ELEMENTS

export interface IListElementProps {
  element: IObject;
}

export interface IEditElementProps {
  isEdited: boolean;
  isValidated: boolean;
  setIsValidated: (isValidated: boolean) => void;
  original: string;
  learning: string;
  description: string | undefined;
  setOriginal: (original: string) => void;
  setLearning: (learning: string) => void;
  setDescription: (description: string | undefined) => void;
  isActive: boolean;
  id: number | undefined;
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
  isValidated: boolean;
  original: string;
  learning: string;
  description: string | undefined;
  element: IObject;
  updateData: (element: IUpdateObject) => void;
}

export interface IDeleteButtonProps {
  isShownDelete: boolean;
  setIsShownDelete: (isShownDelete: boolean) => void;
  setIsDelete: (isDelete: boolean) => void;
  id: number | undefined;
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
  isValidated: boolean;
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

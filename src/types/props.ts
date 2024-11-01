import { ReactNode } from "react";
import { IWordsObject } from "./data";

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

export interface IListProps {
  test: string;
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
  dataObject: IWordsObject | undefined;
  clearData: (clear: boolean) => void;
  activate: (isActivate: boolean) => void;
  isWordsValidated: boolean;
}

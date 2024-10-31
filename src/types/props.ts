import { ReactNode } from "react";

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

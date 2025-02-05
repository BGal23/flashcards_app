import { ReactNode } from "react";

export interface IObject {
  category: string;
  id?: number;
  original: string;
  learning: string;
  description?: string;
  active: boolean;
  scale: number;
}

export interface IUpdateObject {
  original: string;
  learning: string;
  category: string;
  description?: string;
}

export interface ISort {
  id: number;
  icon: ReactNode;
  activate: string;
}

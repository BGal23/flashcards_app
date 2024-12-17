export interface IObject {
  originalWord: string;
  learningWord: string;
  description?: string;
  scale: number;
}

export interface IFinalObject {
  id: string;
  original: string;
  learning: string;
  description?: string;
  isActive: boolean;
  scale: number;
}

export interface IUpdateObject {
  originalWord: string;
  learningWord: string;
  descriptionText?: string;
}

export interface IObject {
  id?: number;
  original: string;
  learning: string;
  description?: string;
  isActive: boolean;
  scale: number;
}

export interface IUpdateObject {
  original: string;
  learning: string;
  description?: string;
}

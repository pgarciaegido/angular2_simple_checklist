// Creates sort of an object template so typescript could help us with possible bugs
export interface Item {
  description: string;
  checked: boolean;
  id?: number;
}

export interface TableListItem {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  progress: number;
  money: number;
  memo: string;
}

export interface PageResponse {
  data: TableListItem[];
  total: number;
  hasMore: boolean;
}

export interface Page {
  cursor: number;
  size: number;
}

export interface PageRequest extends Page {
  sorter?: Sorter;
  filter?: Filter;
  param?: Params;
}

export interface Params {
  date?: Date;
  status?: string;
}

export interface Sorter {
  filed: string;
  order: string;
}

export interface Filter {
  name?: string;
  status?: string[];
}

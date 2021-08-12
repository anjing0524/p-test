export interface TableListItem {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: number;
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

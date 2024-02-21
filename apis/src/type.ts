// 接口响应数据
export interface ServerResult<T = unknown> {
  code: number;
  message?: string;
  data: T
}

// 分页表格响应数据
export interface PageServerResult<T = unknown[]> {
  records: T,
  total: number
}
import type { PageServerResult } from './type';
import { request } from './utils';

export const getArticlePage = (params: unknown) => {
  return request.get<PageServerResult<unknown[]>>('/article/page', { params });
};

export const getCategory = () => {
  return request.get<unknown[]>('/category');
};

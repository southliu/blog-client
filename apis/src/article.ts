import type { PageServerResult } from './type';
import { request } from './utils';

export const getArticlePage = (params: unknown) => {
  return request.get<PageServerResult<unknown[]>>('/article/page', { params });
};

export const getCategory = () => {
  return request.get<unknown[]>('/category');
};

export const getCategoryTop = () => {
  return request.get<unknown[]>('/category/top');
};

export const getArticleTop = () => {
  return request.get<unknown[]>('/article/top');
};
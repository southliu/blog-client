import { request } from './utils';

export const getArticlePage = (params: unknown) => {
  return request.get('/article/page', { params });
};

export const getCategory = () => {
  return request.get('/category');
};

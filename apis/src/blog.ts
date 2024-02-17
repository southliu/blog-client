import { request } from './utils';

export const getBlogPage = (params: unknown) => {
  return request.get('/blog/page', { params });
};
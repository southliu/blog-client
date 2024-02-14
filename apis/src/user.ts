import { request } from './utils';

export const userApi = {
  getUser: (id: number) => request.get(`/api/users/${id}`),
  createUser: (data: Record<string, unknown>) => request.post(`/api/users`, data),
  getUserById: (id: number) => Promise.resolve(id),
};
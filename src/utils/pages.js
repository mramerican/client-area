import { PrivatePages, LoginPages } from 'components/pages';

export const findPatchPages = (id) =>
  PrivatePages[id] ? PrivatePages[id].path : '/home';
export const findPatchLogin = (id) =>
  LoginPages[id] ? LoginPages[id].path : '/login';

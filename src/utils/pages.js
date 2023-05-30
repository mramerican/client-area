import { PrivatePages, LoginPages, BASE_PATH } from 'components/pages';

export const findPatchPages = (id) =>
  PrivatePages[id] ? PrivatePages[id].path : BASE_PATH;
export const findPatchLogin = (id) =>
  LoginPages[id] ? LoginPages[id].path : BASE_PATH;

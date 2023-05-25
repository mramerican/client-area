import { PrivatePages } from 'components/pages';

export const findPatch = (id) =>
  PrivatePages[id] ? PrivatePages[id].path : '/home';

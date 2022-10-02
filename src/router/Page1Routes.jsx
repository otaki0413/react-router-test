import { Page1 } from '../Page1';
import { Page1DetailA } from '../Page1DetailA';
import { Page1DetailB } from '../Page1DetailB';

// pege1配下のルーティング情報を配列情報で管理
export const page1Routes = [
  {
    path: '/',
    exact: true,
    children: <Page1 />
  },
  {
    path: '/detailA',
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: '/detailB',
    exact: false,
    children: <Page1DetailB />
  }
];

import { Page2 } from '../Page2';
import { UrlParameter } from '../UrlParameter';

// pege2配下のルーティング情報を配列情報で管理
// コロン以下はURLパラメータとなる
// 例） page2/:id ← pages/666
export const page2Routes = [
  {
    path: '/',
    exact: true,
    children: <Page2 />
  },
  {
    path: '/:id',
    exact: false,
    children: <UrlParameter />
  }
];

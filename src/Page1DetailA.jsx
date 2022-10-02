import { useHistory, useLocation } from 'react-router-dom';

export const Page1DetailA = () => {
  // 前画面から渡されたデータを受け取る
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  // 前画面へ戻る関数
  const oncClickBack = () => history.push('/page1');

  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={oncClickBack}>戻る</button>
    </div>
  );
};

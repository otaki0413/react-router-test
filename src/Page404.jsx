import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div>
      <h1>404 This is not the web page you are looking for</h1>
      <Link to="/">TOPに戻る</Link>
    </div>
  );
};

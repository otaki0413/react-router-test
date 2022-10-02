import { useParams, useLocation } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  console.log(search);
  console.log(query);
  return (
    <div>
      <h1>URLパラメータです</h1>
      <p>URLパラメータ： {id} </p>
      <p>クエリパラメータ： {query.get('name')} </p>
    </div>
  );
};

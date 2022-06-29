import React from "react";
import { useGetJokeByTypeQuery } from "store/services/todo";

const Favorites = () => {
  const [count, setCount] = React.useState(10);
  const { data, error, isLoading } = useGetJokeByTypeQuery({
    start: 0,
    limit: count,
  });

  console.log(data);
  return (
    <div>
      {error ? (
        <h1>Error</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map((data: any, index: any) => {
            return (
              <li key={index}>
                <img height={20} width={30} src={data.thumbnailUrl} alt="" />
                {data.id}--{data.title}
              </li>
            );
          })}
        </ul>
      )}
      <button onClick={() => setCount((i) => i + 100)}>Fetch More ToDo</button>
    </div>
  );
};
export default Favorites;

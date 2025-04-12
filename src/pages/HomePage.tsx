import Todo from "../components/Todo";
import { useGetAllTodosQuery } from "../redux/features/api/baseApi";
import { ITodo } from "../types/todo.type";

const HomePage = () => {
  const { data, isLoading } = useGetAllTodosQuery(undefined);

  if (isLoading===false) {
    return <h1>Loading...</h1>;
  }

  if (data?.length === 0) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        There is no todo
      </div>
    );
  }

  if (data?.length > 0) {
    return (
      <>
        
      </>
    );
  }

};

export default HomePage;

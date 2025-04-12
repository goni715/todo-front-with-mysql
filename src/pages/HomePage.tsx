import Todo from "../components/Todo";
import TodoTable from "../components/TodoTable";
import { useGetAllTodosQuery } from "../redux/features/api/baseApi";
import { ITodo } from "../types/todo.type";

const HomePage = () => {
  const { data, isLoading } = useGetAllTodosQuery(undefined);

  if (isLoading) {
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
        <TodoTable data={data}/>
      </>
    );
  }

};

export default HomePage;

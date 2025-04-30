import TodoTable from "./TodoTable";
import { useGetAllTodosQuery } from "../../redux/features/api/baseApi";
import ListLoading from "../Loader/ListLoading";

const TodoList = () => {
  const { data, isLoading } = useGetAllTodosQuery(undefined);

  if (isLoading) {
    return <ListLoading/>;
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
        <TodoTable data={data} />
      </>
    );
  }
};

export default TodoList;

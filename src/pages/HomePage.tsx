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
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                    Serial
                  </th>
                  <th className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                    Name
                  </th>
                  <th className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                    Email
                  </th>
                  <th className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.map((item:ITodo,i:number)=>(
                    <Todo key={i} item={item} index={i}/>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }

  return <></>;
};

export default HomePage;

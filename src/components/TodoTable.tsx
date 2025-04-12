
import { ITodo } from './../types/todo.type';
import Todo from './Todo';
const TodoTable = ({data} : {data: ITodo[]}) => {
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
};

export default TodoTable;
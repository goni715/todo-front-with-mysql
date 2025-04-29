import { FaEdit } from "react-icons/fa";
import DeleteTodoModal from "../modal/DeleteTodoModal";
import { ITodo } from "../../types/todo.type";
import { useNavigate } from "react-router-dom";

type TProps = {
    item: ITodo,
    index: number;
}

const Todo = ({item, index}: TProps) => {
  const navigate = useNavigate();
   
    
    return (
        <>
           <tr>
                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap text-center">
                 {Number(index+1)}
                </td>
                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                 {item?.name}
                </td>
                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                  {item?.email}
                </td>
                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap flex items-center justify-center gap-3">
                  <button onClick={()=>navigate(`/todo/${item?.id}`)} className="bg-green-500 p-2 rounded-full text-white text-xl cursor-pointer">
                    <FaEdit />
                  </button>
                  <DeleteTodoModal todoId={item?.id}/>
                </td>
              </tr>
              
        </>
    );
};

export default Todo;
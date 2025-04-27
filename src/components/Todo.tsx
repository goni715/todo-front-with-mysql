import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { ITodo } from "../types/todo.type";

type TProps = {
    item: ITodo,
    index: number;
}

const Todo = ({item, index}: TProps) => {
   
    
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
                  <button className="bg-green-500 p-2 rounded-full text-white text-xl cursor-pointer">
                    <FaEdit />
                  </button>
                  <button className="bg-red-500 p-2 rounded-full text-white text-xl cursor-pointer">
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
              
        </>
    );
};

export default Todo;
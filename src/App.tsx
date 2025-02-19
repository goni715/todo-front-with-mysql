import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const App = () => {
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
              <tr>
                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                  1
                </td>
                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                  Osman Goni
                </td>
                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                  goni@gmail.com
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
              <tr>
                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                  2
                </td>
                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                  Evan Ahmed
                </td>
                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap">
                  evan@gmail.com
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;

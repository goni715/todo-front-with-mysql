import { FaArrowLeft } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom"; 
import TodoEdit from "../components/todo/TodoEdit";

const TodoEditPage = () => {
  const navigate = useNavigate();



  const handleGoBack = () => {
    navigate("/"); 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      {/* Go Back Button */}
      <button
        onClick={handleGoBack}
        className="flex cursor-pointer items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <FaArrowLeft className="mr-2" />
        Go Back
      </button>

      {/* Update Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Update Todo</h2>
        <TodoEdit/>
      </div>
    </div>
  );
};

export default TodoEditPage;



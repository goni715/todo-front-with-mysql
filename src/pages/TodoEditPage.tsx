import { FaArrowLeft } from "react-icons/fa"; // Make sure you have react-icons installed
import { useNavigate } from "react-router-dom"; // assuming you're using React Router for navigation
import TodoUpdateForm from "../components/todo/TodoUpdateForm";
import TodoUpdateLoading from "../components/Loader/TodoUpdateLoading";

const TodoEditPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/"); // This navigates to the previous page
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
        <TodoUpdateForm/>
        {/* <TodoUpdateLoading/> */}
      </div>
    </div>
  );
};

export default TodoEditPage;

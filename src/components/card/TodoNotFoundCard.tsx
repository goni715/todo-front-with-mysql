
const TodoNotFoundCard = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Todo Not Found</h2>
      <p className="text-gray-600 text-center">
        We couldn't find the todo you are looking for. It might have been deleted or never existed.
      </p>

      <button
        onClick={() => window.history.back()}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default TodoNotFoundCard;

import CreateTodoModal from "../components/modal/CreateTodoModal";
import TodoList from "../components/todo/TodoList";

const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="bg-white shadow-md rounded-lg">
          <div className="py-4 px-8 fixed flex justify-end w-full top-0 right-0 bg-gray-900">
            <CreateTodoModal />
          </div>
          <div className="px-0 sm:px-6 mt-[80px] py-2">
          <TodoList />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

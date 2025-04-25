import CreateTodoModal from '../components/CreateTodoModal';
import TodoList from '../components/TodoList';

const HomePage = () => {
  return (
    <>
     <div className="py-4 px-8 flex justify-end">
      <CreateTodoModal/>
      <button className="px-3 text-md py-1 cursor-pointer bg-purple-500 hover:bg-purple-600 duration-200 text-white rounded-md">Add New</button>
     </div>
      <TodoList/>
    </>
  );
};

export default HomePage;
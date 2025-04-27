import CreateTodoModal from '../components/CreateTodoModal';
import TodoList from '../components/TodoList';

const HomePage = () => {
  return (
    <>
     <div className="p-6">
      <div className="bg-white shadow-md min-h-[70vh] rounded-lg">
      <div className="py-4 px-8 flex justify-end">
      <CreateTodoModal/>
     </div>
      <TodoList/>
      </div>
     </div>
    </>
  );
};

export default HomePage;
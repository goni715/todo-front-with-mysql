import CreateTodoModal from '../components/CreateTodoModal';
import TodoList from '../components/TodoList';

const HomePage = () => {
  return (
    <>
     <div className="py-4 px-8 flex justify-end">
      <CreateTodoModal/>
     </div>
      <TodoList/>
    </>
  );
};

export default HomePage;
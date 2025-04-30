import { useParams } from "react-router-dom";
import TodoUpdateForm from "./TodoUpdateForm";
import { useGetSingleTodoQuery } from "../../redux/features/api/baseApi";
import TodoUpdateLoading from "../Loader/TodoUpdateLoading";
import TodoNotFoundCard from "../card/TodoNotFoundCard";

const TodoEdit = () => {
    const { id } = useParams();
    const {data, isLoading} = useGetSingleTodoQuery(id as string);
    const todo = data;
    console.log(todo);

    if(isLoading){
       return <TodoUpdateLoading/>
    }
    if(!isLoading && todo){
        return <TodoUpdateForm/>
    }
    if(!isLoading && !todo){
        return <TodoNotFoundCard/>
    }
    
};

export default TodoEdit;
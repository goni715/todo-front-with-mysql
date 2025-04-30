/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"; // assuming you're using React Router for navigation
import { ITodo } from "../../types/todo.type";
import { useUpdateTodoMutation } from "../../redux/features/api/baseApi";
import { CgSpinnerTwo } from "react-icons/cg";
import { ErrorToast, SuccessToast } from "../../helper/ValidationHelper";

type TProps = {
  todo: ITodo;
};

const TodoUpdateForm = ({ todo }: TProps) => {
  const { id, name: initialName, email: initialEmail } = todo || {};
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const navigate = useNavigate();
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      await updateTodo({
        id,
        data: {
          name,
          email
        }
      }).unwrap();
      SuccessToast("Todo Update Success");
      navigate("/")
    }
    catch(err:any){
      const status = err?.status;
      if(status === 404){
        ErrorToast("Todo Not Found")
      }else if(status === 409){
        ErrorToast("This Email is already existed")
      }
      else{
        ErrorToast("Something Went Wrong !")
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex justify-center items-center gap-x-2 py-2 px-4 rounded-xl transition cursor-pointer disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <CgSpinnerTwo className="animate-spin" fontSize={16} />
              Processing...
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </div>
    </form>
  );
};

export default TodoUpdateForm;

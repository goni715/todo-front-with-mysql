/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { useDeleteTodoMutation } from "../../redux/features/api/baseApi";
import { FaRegTrashAlt } from "react-icons/fa";
import { ErrorToast, SuccessToast } from "../../helper/ValidationHelper";


type TProps = {
  todoId: string;
}

const DeleteTodoModal = ({ todoId }: TProps) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ deleteTodo, { isLoading, isSuccess, isError }] = useDeleteTodoMutation();

    useEffect(()=> {
        if(isSuccess || isError){
          setModalOpen(false)
        }
    },[isSuccess, isError])
   
    const handleDelete = async () => {
      try{
        await deleteTodo(todoId).unwrap();
        SuccessToast("Todo is deleted successfully");
      }catch(err:any){
        ErrorToast("Somethinng Went Wrong");
      }
    }

  return (
    <>
      <button onClick={()=>setModalOpen(true)} className="bg-red-500 p-2 rounded-full text-white text-xl cursor-pointer">
        <FaRegTrashAlt />
      </button>
      <Modal
        title="Are you sure, you want to delete?"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <div className="flex justify-end px-4 gap-x-3">
          <button
            onClick={() => setModalOpen(false)}
            className="bg-black text-white px-4 py-1 rounded-md cursor-pointer"
          >
            No
          </button>
          <button
            onClick={handleDelete}
            disabled={isLoading}
            className="bg-red-500 cursor-pointer hover:bg-red-600 duration-500 text-white px-4 py-1 rounded-md disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
              </>
            ) : (
              "Yes"
            )}
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteTodoModal
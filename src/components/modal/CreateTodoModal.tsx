import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgSpinnerTwo } from "react-icons/cg";
import { useCreateTodoMutation } from "../../redux/features/api/baseApi";
import { ErrorToast, SuccessToast } from "../../helper/ValidationHelper";

const CreateTodoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createTodo, { isLoading }] = useCreateTodoMutation();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createTodo({ name, email }).unwrap();
      SuccessToast("Todo is created Successfully");
      setName("");
      setEmail("");
      closeModal();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const status = err?.status;
      if (status === 409) {
        ErrorToast("This Email is already exists");
      } else {
        ErrorToast("Something Went Wrong");
      }
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700"
      >
        Add New
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl relative">
            <h2 className="text-xl font-semibold mb-4">Add New Todo</h2>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black bg-gray-200 hover:bg-gray-400 p-2 rounded-md cursor-pointer"
            >
              <IoMdClose size={20} />
            </button>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="inputField"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="inputField"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="emailField"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="emailField"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex gap-x-3 justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 w-1/3 sm:w-auto bg-gray-300 rounded-lg text-sm cursor-pointer text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-gray-500"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 w-2/3 sm:w-36 cursor-pointer bg-blue-500 text-white rounded-lg flex justify-center items-center gap-x-2 text-sm hover:bg-blue-600 focus:outline-none focus:ring-blue-500 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <CgSpinnerTwo className="animate-spin" fontSize={16} />
                      Processing...
                    </>
                  ) : (
                    "Add"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTodoModal;

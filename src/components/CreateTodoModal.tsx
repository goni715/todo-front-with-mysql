import { useState } from "react";

const CreateTodoModal =() =>{
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add New
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-md">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl relative">
            <h2 className="text-xl font-semibold mb-4">Add New Todo</h2>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
            <div className="mb-6">
          <label htmlFor="inputField" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="inputField"
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type something..."
          />
        </div>

        <div className="mb-6">
          <label htmlFor="emailField" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            id="emailField"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
            <div className="flex gap-x-3 justify-end">
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Close
          </button>
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateTodoModal;

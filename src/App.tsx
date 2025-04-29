import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoEditPage from "./pages/TodoEditPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/todo/:id" element={<TodoEditPage/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
       </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

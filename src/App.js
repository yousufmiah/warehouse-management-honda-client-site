import { Route, Routes } from "react-router-dom";
import LogIn from "./LogIn/LogIn";
import Register from "./Register/Register";
import AddNew from "./ManageItem/AddNew/AddNew";
import Manage from "./ManageItem/Manage/Manage";
import NotFound from "./NotFound/NotFound";
import About from "./Pages/About/About";
import AllItems from "./Pages/AllItems/AllItems";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Items from "./Pages/Items/Items";
import RequireAuth from "./RequireAuth/RequireAuth";
import Header from "./Shared/Header/Header";
import UpdateItem from "./Pages/UpdateItem/UpdateItem";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/Items" element={<Items></Items>}></Route>
        <Route path="/item/:itemId" element={<Details></Details>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/details/:detailsId" element={<Details></Details>}></Route>
        <Route
          path="/updateItem/:updateId"
          element={<UpdateItem></UpdateItem>}
        ></Route>

        <Route
          path="/manage"
          element={
            <RequireAuth>
              <Manage></Manage>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <Manage></Manage>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addNew"
          element={
            <RequireAuth>
              <AddNew></AddNew>
            </RequireAuth>
          }
        ></Route>

        <Route path="/allItems" element={<AllItems></AllItems>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

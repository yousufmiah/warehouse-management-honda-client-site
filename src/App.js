import { Route, Routes } from "react-router-dom";
import LogIn from "./LogIn/LogIn";
import AddNew from "./ManageItem/AddNew/AddNew";
import Manage from "./ManageItem/Manage/Manage";
import NotFound from "./NotFound/NotFound";
import About from "./Pages/About/About";
import AllItems from "./Pages/AllItems/AllItems";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Item from "./Pages/Item/Item";
import Items from "./Pages/Items/Items";
import RequireAuth from "./RequireAuth/RequireAuth";
import Header from "./Shared/Header/Header";
import SignUp from "./SingUp/SignUp";

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

        <Route path="/manage" element={<Manage></Manage>}></Route>
        {/* <Route
          path="/manage"
          element={
            <RequireAuth>
              <Manage></Manage>
            </RequireAuth>
          }
        ></Route> */}
        <Route path="/addNew" element={<AddNew></AddNew>}></Route>

        <Route path="/allItems" element={<AllItems></AllItems>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

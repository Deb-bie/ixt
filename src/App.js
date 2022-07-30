import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import SignIn from "./pages/signin/SignIn.jsx";
import Users from "./pages/users/Users.jsx";
import User from "./pages/user/User.jsx";
import New from "./pages/new/New.jsx";
import { productInputs, userInputs } from "./components/data/FormData";
// import "./style/dark.scss";
import { useContext, useState } from "react";
// import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/AuthContext";
// import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
// import NewHotel from "./pages/newHotel/NewHotel";
// import NewRoom from "./pages/newRoom/NewRoom";

function App() {
  // const { darkMode } = useContext(DarkModeContext);

  // const ProtectedRoute = ({ children }) => {
  //   const { user } = useContext(AuthContext);

  //   if (!user) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };


  return (
    <div 
    // className={darkMode ? "app dark" : "app"}
    >
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<User />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="products">
              <Route index element={<Users />} />
              <Route path=":productId" element={<User />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>




            {/* <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel  />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom  />
                  </ProtectedRoute>
                }
              /> */}




          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { RootLayout } from "./layout/Root.layout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Navigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Favorite from "./components/Favorites/Favorite";
import About from "./components/About/About";
import Error from "./components/Error/Error";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

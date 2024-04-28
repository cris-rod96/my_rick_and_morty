import { useState } from "react";
import { authEndpoints } from "../api/auth.api";
import { utilStorage } from "../utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useLogin = (toast) => {
  const [accessUser, setAccessUser] = useState(false);
  const navigate = useNavigate();

  const login = (credentials) => {
    authEndpoints
      .login(credentials.email, credentials.password)
      .then((res) => {
        const { access, message, user } = res.data;
        utilStorage.saveDataStorage("access", access);
        utilStorage.saveDataStorage("user-session", user);
        toast.success(`${message}. Bienvenido`);
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const logOut = (toast) => {
    utilStorage.updateAccess("access");
    setAccessUser(!accessUser);
    toast.info("Adiós. Esperamos verte pronto.");
    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
  };

  useEffect(() => {
    const access = utilStorage.getDataStorage("access");
    setAccessUser(access);
    if (accessUser) {
      navigate("/home");
    }
  }, []);

  return {
    login,
    logOut,
    accessUser,
  };
};

export default useLogin;

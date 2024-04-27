import { useState } from "react";
import { authEndpoints } from "../api/auth.api";
import { utilStorage } from "../utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useLogin = () => {
  const [accessUser, setAccessUser] = useState(false);
  const navigate = useNavigate();

  const login = (credentials, toast) => {
    console.log(credentials);
    authEndpoints
      .login(credentials.email, credentials.password)
      .then((res) => {
        const { access, message, user } = res.data;
        utilStorage.saveDataStorage("access", access);
        utilStorage.saveDataStorage("user-session", user);
        setAccessUser(access);
        toast.success(`${message}. Bienvenido.`);
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const logOut = (toast) => {
    utilStorage.updateAccess("access");
    setAccessUser(!accessUser);
    toast.info("Adiós. Esperamos verte pronto.");
  };

  useEffect(() => {
    if (accessUser) {
      navigate("/");
    }
  }, [accessUser, navigate]);

  return {
    login,
    logOut,
    accessUser,
  };
};

export default useLogin;

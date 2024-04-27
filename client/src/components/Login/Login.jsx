import { useState } from "react";
import styledLogin from "./Login.module.css";
import validations from "../../helpers/validations";
import useLogin from "../../hooks/useLogin";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { toast } from "sonner";
export default function Login() {
  const { login } = useLogin();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [disabledButton, setDisabledButton] = useState(true);
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setCredentials({
      ...credentials,
      [name]: value,
    });

    setErrors(
      validations({
        ...credentials,
        [name]: value,
      })
    );

    if (
      credentials.email.length > 0 &&
      credentials.password.length > 0 &&
      Object.values(errors).length === 0
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(errors).length === 0) {
      login(credentials, toast);
    }
  };

  return (
    <div className={styledLogin.wrapper}>
      <Toaster richColors />
      <div className={styledLogin.wrapperPoster}>
        <img src={"/poster.jpg"} alt="Logo Rick & Morty" />
      </div>
      <div className={styledLogin.wrapperForm}>
        <form
          method="POST"
          className={styledLogin.form}
          onSubmit={handleSubmit}
        >
          <div className={styledLogin.formGroup}>
            <label htmlFor="" className={styledLogin.formGroupLabel}>
              Email
            </label>
            <input
              type="text"
              className={`${styledLogin.formGroupInput} ${
                errors.email ? styledLogin.inputError : null
              }`}
              onChange={handleChange}
              name="email"
              value={credentials.email}
              autoComplete="off"
            />
            {errors.email ? (
              <p className={styledLogin.messageError}>{errors.email}</p>
            ) : null}
          </div>
          <div className={styledLogin.formGroup}>
            <label htmlFor="" className={styledLogin.formGroupLabel}>
              Contraseña
            </label>
            <input
              type="password"
              className={`${styledLogin.formGroupInput} ${
                errors.password ? styledLogin.inputError : null
              }`}
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            {errors.password ? (
              <p className={styledLogin.messageError}>{errors.password}</p>
            ) : null}
          </div>
          <div className={styledLogin.formGroup}>
            <button
              className={styledLogin.btnIngresar}
              type="submit"
              disabled={
                errors.email?.length > 0 || errors.password?.length > 0
                  ? true
                  : false
              }
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

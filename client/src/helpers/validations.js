const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const regExpNumero = /(?=.*[0-9])/;
export default function validations(inputs) {
  const errors = {};

  if (
    !inputs.email ||
    !regExpEmail.test(inputs.email) ||
    inputs.email.length > 35
  ) {
    errors.email = "Ingrese un email válido";
  }

  if (!regExpNumero.test(inputs.password)) {
    errors.password = "Al menos 1 número";
  }

  if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = "Debe tener entre 6 y 10 carácteres";
  }

  return errors;
}

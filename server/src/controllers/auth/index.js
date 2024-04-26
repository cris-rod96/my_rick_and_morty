import { User } from "../../database/conn.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(401).json({
      message: "Credenciales incorrectas",
    });

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      await User.create({ email, password });
      return res.status(401).json({
        message:
          "Hemos detectado de que no estas registrado. Hemos creado una cuenta con tus credenciales para que puedas iniciar sesión",
      });
    }

    const validate = user.password === password;
    if (!validate)
      return res.status(401).json({
        message: "Credenciales incorrectas",
      });

    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
      },
      message: "Inicio de sesión exitoso",
      access: true,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Credenciales incorrectas",
    });
  }
};

export default { login };

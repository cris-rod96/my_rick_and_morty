import styledAbout from "./About.module.css";
export default function About() {
  return (
    <div className={styledAbout.containerAbout}>
      <div className={styledAbout.header}>
        <div className={styledAbout.icons}>
          <a
            href="mailto:crisrodam1996@gmail.com?subject=Quiero contactar contigo"
            target="__blank"
            className={`${styledAbout.icon} ${styledAbout.iconEmail}`}
          >
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a
            href="https://github.com/cris-rod96"
            target="__blank"
            className={`${styledAbout.icon} ${styledAbout.iconGit}`}
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/cristhian-rodriguez-659779205/"
            target="__blank"
            className={`${styledAbout.icon} ${styledAbout.iconLinkedin}`}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className={styledAbout.content}>
        <div className={styledAbout.contentProfile}>
          <div className={styledAbout.description}>
            <h3>Bienvenido</h3>
            <div className={styledAbout.text}>
              <p>
                Mi nombre es Cristhian Rodríguez, soy un desarrollador web con
                sede en El Empalme, Guayas, Ecuador. Desde los 16 años he estado
                incursionando en este mundo del desarrollo, he desarrollado
                sistemas para varias plataformas (web, desktop y mobile ) pero
                siempre me he interesado mayormente por el desarrollo web.
                Abierto a conocer personas, colaborar o charlar sobre proyectos
                y novedades tecnólogicas.
              </p>
            </div>
          </div>
          <div className={styledAbout.profile}>
            <img src={"perfil.jpg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

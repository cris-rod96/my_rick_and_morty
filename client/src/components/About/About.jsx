import styledAbout from "./About.module.css";
export default function About(props) {
  return (
    <div className={styledAbout.containerAbout}>
      <div className={styledAbout.header}>
        <div className={styledAbout.icons}>
          <div className={`${styledAbout.icon} ${styledAbout.iconEmail}`}>
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className={`${styledAbout.icon} ${styledAbout.iconGit}`}>
            <i className="fa-brands fa-github"></i>
          </div>
          <div className={`${styledAbout.icon} ${styledAbout.iconLinkedin}`}>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className={styledAbout.content}>
        <div className={styledAbout.aboutMe}>
          <h3>Bienvenido</h3>
          <div className={styledAbout.text}>
            <p>
              Mi nombre es Cristhian Rodríguez, soy un desarrollador full-stack
              con sede en El Empalme, Guayas, Ecuador. Desde los 16 años he
              estado incursionando en este mundo del desarrollo.
            </p>
          </div>
        </div>
        <div className={styledAbout.profile}>
          <img src={"perfil.jpg"} alt="" />
        </div>
      </div>
    </div>
  );
}

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

              <p>
                Este módulo aún esta en desarrollo. Tenganme paciencia U_U,.
              </p>
            </div>
          </div>
          <div className={styledAbout.profile}>
            <img src={"perfil.jpg"} alt="" />
          </div>
        </div>

        {/* <div className={styledAbout.contentSkills}>
          <div className={styledAbout.henrySkills}>
            <div className={styledAbout.iconSkills}>
              <div className={styledAbout.skill}>
                <img src={"html.png"} alt="" />
              </div>
              <div className={styledAbout.skill}>
                <img src={"js.png"} />
              </div>
              <div className={styledAbout.skill}>
                <img src={"react.png"} alt="" />
              </div>
              <div className={styledAbout.skill}>
                <img src={"node.png"} alt="" />
              </div>

              <div className={styledAbout.skill}>
                <img src={"express.png"} alt="" />
              </div>
            </div>
            <div className={styledAbout.description}>
              <h3>Henry Skills</h3>
              <div className={`${styledAbout.text} ${styledAbout.borderRight}`}>
                <p>
                  Durante esta hermosa estapa de Bootcamp de Henry he adquirido
                  nuevos conocimientos que me han permitido poder crear este
                  proyecto. Este proyecto es una muestra de lo aprendido en
                  HENRY.
                </p>
              </div>
            </div>
          </div>
          <div className={styledAbout.contentSkills}>
            <div className={styledAbout.henrySkills}>
              <div className={styledAbout.description}>
                <h3>Skill adicionales</h3>
                <div className={styledAbout.text}>
                  <p>
                    Durante mi etapa estudiantil (no siempre enfocada en el
                    desarrollo web), he adquirido varias experiencias con
                    distintos lenguajes y tecnologías que también forma parte de
                    mi como programador.
                  </p>
                </div>
              </div>
              <div className={styledAbout.iconSkills}>
                <div className={styledAbout.skill}>
                  <img src={"arduino.png"} alt="" />
                </div>
                <div className={styledAbout.skill}>
                  <img src={"bootstrap.png"} alt="" />
                </div>
                <div className={styledAbout.skill}>
                  <img src={"mysql.png"} />
                </div>
                <div className={styledAbout.skill}>
                  <img src={"php.png"} alt="" />
                </div>
                <div className={styledAbout.skill}>
                  <img src={"python.png"} alt="" />
                </div>
                <div className={styledAbout.skill}>
                  <img src={"csharp.png"} alt="" />
                </div>
                <div className={styledAbout.skill}>
                  <img src={"css3.png"} alt="" />
                </div>
                <div className={styledAbout.skill}>
                  <img ssrc={"sqlserver.png"} alt="" />
                </div>
                <div className={styledAbout.skill}>
                  <img src={"java.png"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

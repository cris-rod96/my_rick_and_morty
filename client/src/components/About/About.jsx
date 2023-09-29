import styledAbout from "./About.module.css";
export default function About(props) {
  return (
    <div className={styledAbout.containerAbout}>
      <div className={styledAbout.containerImage}>
        <img src={"perfil.jpg"} alt="Cristhian Rodríguez" />
      </div>
      <div className={styledAbout.aboutInformation}>
        <div className={styledAbout.information}>
          <h3>Enfoque</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            tempora dicta cupiditate, reiciendis atque temporibus cum placeat
            nesciunt non quisquam eos blanditiis rerum possimus, nisi ullam
            consequuntur saepe recusandae, omnis dolorum earum. Veniam, mollitia
            ipsum? Deserunt dolores eos earum in qui distinctio non sit dicta
            error atque voluptates, sed explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            ducimus voluptatum, enim eum inventore quibusdam, laborum maiores
            et, quis quae praesentium optio rerum eveniet? Rerum perspiciatis
            eius aspernatur corrupti sapiente.
          </p>
        </div>
        <div className={styledAbout.information}>
          <h3>Biografía</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            tempora dicta cupiditate, reiciendis atque temporibus cum placeat
            nesciunt non quisquam eos blanditiis rerum possimus, nisi ullam
            consequuntur saepe recusandae, omnis dolorum earum. Veniam, mollitia
            ipsum? Deserunt dolores eos earum in qui distinctio non sit dicta
            error atque voluptates, sed explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            ducimus voluptatum, enim eum inventore quibusdam, laborum maiores
            et, quis quae praesentium optio rerum eveniet? Rerum perspiciatis
            eius aspernatur corrupti sapiente.
          </p>
        </div>
      </div>

      <div className={styledAbout.aboutSkills}>
        <h3>Skills</h3>
        <div className={styledAbout.boxSkills}>
          <div className={styledAbout.icons}>
            <img src={"html.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"js.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"css3.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"react.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"node.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"mysql.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"postgresql.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"python.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"java.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"csharp.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"sqlserver.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"php.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"bootstrap.png"} alt="" />
          </div>
          <div className={styledAbout.icons}>
            <img src={"arduino.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

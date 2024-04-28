import styledEmpty from "./Empty.module.css";
export default function Empty(props) {
  const { parent } = props;
  {
    return parent === "Home" ? (
      <>
        <div className={styledEmpty.containerEmpty}>
          <img src={"icon_rick.webp"} alt="" />
          <p>
            Al parecer aún no tienes personajes registrados. Para ingresar un
            personaje puedes hacerlo de 2 formas:
          </p>
          <p>
            1.- Ingresa un número entre 1 y 826 y presiona el botón (+) para
            agregarlo
          </p>
          <p>
            2.- Presionando el botón de random para agregar un personaje de
            manera aleatoria
          </p>
        </div>
      </>
    ) : (
      <div className={styledEmpty.favoritesEmpty}>
        <div className={styledEmpty.poster}>
          <img src={"icono_pag.webp"} alt="" />
        </div>
        <div className={styledEmpty.message}>
          <div className={styledEmpty.text}>
            <img src={"rick.webp"} alt="" />
            <p>
              ¿Que haces aquí si aún no has añadido ningún personaje a tu lista
              de favoritos?
            </p>
          </div>
          <div className={styledEmpty.text}>
            <img src={"morty.webp"} alt="" />
            <p>No sé como hacerlo, ¿Me ayudas?</p>
          </div>
          <div className={styledEmpty.text}>
            <img src={"rick.webp"} alt="" />
            <p>
              Regresa al home. Si hay personajes agregados verás que en la parte
              de abajo de los personajes hay un corazoncito, presionalo en el
              caso de que quieras añadirlo a tus favoritos. En el caso de que no
              haya personajes verás unas instrucciones que te dicen como agregar
              uno.
            </p>
          </div>
          <div className={styledEmpty.text}>
            <img src={"morty.webp"} alt="" />
            <p>Perfecto. Muchas gracias.</p>
          </div>
        </div>
      </div>
    );
  }
}

import Card from "../Card/Card";
import Empty from "../Empty/Empty";
import styledHome from "./Home.module.css";
export default function Home(props) {
  const { characters, handlerDelete } = props;
  return (
    <div className={styledHome.containerHome}>
      {characters.length === 0 ? (
        <div className={styledHome.containerEmpty}>
          <Empty parent="Home" />
        </div>
      ) : (
        <div className={styledHome.containerCards}>
          {characters.map((character, idx) => {
            return (
              <Card
                character={character}
                handlerDelete={handlerDelete}
                key={idx}
                parent="Home"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

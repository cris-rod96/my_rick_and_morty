import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styledDetail from "./Detail.module.css";
import useDetail from "../../hooks/useDetail";
import { useOutletContext } from "react-router-dom";

export default function Detail() {
  const { toast } = useOutletContext();
  const { id } = useParams();
  const { getCharacterByID, character, available } = useDetail(toast);
  useEffect(() => {
    if (id) {
      getCharacterByID(id);
    }
  }, [id]);
  return available ? (
    <div
      className={`${styledDetail.card} ${
        character.status === "Dead"
          ? styledDetail.cardShadowDead
          : styledDetail.cardShadowAlive
      }`}
    >
      <div
        className={`${styledDetail.cardHeader} ${
          character.status !== "Dead" ? styledDetail.alive : styledDetail.dead
        }`}
      >
        <h3>PORTAL LICENSE</h3>
      </div>
      <div className={styledDetail.cardContent}>
        <div className={styledDetail.boxInfo}>
          <div className={styledDetail.div}>
            <span>License #</span>
            <span>JR-DH-C.127</span>
          </div>
          <div className={styledDetail.div}>
            <span>Class</span>
            <span>Cloack</span>
          </div>
          <div className={styledDetail.div}>
            <span>Expires</span>
            <span>Never</span>
          </div>
        </div>

        <div className={styledDetail.cardDescription}>
          <img
            src={character.image}
            className={
              character.status === "Dead" ? styledDetail.imageDead : null
            }
            alt={`Perfil de ${character.name}`}
          />
          <div className={styledDetail.cardInfo}>
            <h3>{character.name}</h3>
            <h4>{character.origin?.name}</h4>
            <h4>{character.location?.name}</h4>
            <div className={styledDetail.boxInfo}>
              <div className={styledDetail.div}>
                <span>Sex</span>
                <span>{character.gender}</span>
              </div>
              <div className={styledDetail.div}>
                <span>Eyes</span>
                <span>Squiggles</span>
              </div>
              <div className={styledDetail.div}>
                <span>Specie</span>
                <span>{character.species}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styledDetail.containerError}>
      <div className={styledDetail.errorImageContainer}>
        <img
          src="/no_permitido.webp"
          alt="Not Available Image"
          className={styledDetail.errorImage}
        />
      </div>
      <h3 className={styledDetail.textError}>¡No puedes hacer esto!</h3>
    </div>
  );
}

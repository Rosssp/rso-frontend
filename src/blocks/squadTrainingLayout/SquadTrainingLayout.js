import Image from "next/image";
import React from "react";
import SquadCard from "../../components/UI/cards/squadCard/SquadCard";
import Spacer from "../../components/UI/spacer/Spacer";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./SquadTrainingLayout.module.scss";

export default function SquadTrainingLayout() {
  const mob600 = useMediaQuery(600);
  const mob768 = useMediaQuery(768);

  const tempItem = [
    { descr: "Современные образовательные курсы", image: images.study },
    { descr: "Бесплатное обучение", image: images.fire },
    { descr: "Последующее трудоустройство", image: images.work },
  ];
  return (
    <div
      style={{
        position: "relative",
        overflowY: "clip",
        overflowX: "clip",
        paddingTop: "6px",
      }}
    >
      {mob600 ? (
        ""
      ) : (
        <div
          style={{
            position: "absolute",
            width: "1220px",
            height: "521px",
            userSelect: "none",
            pointerEvents: "none",
            transform: "translateY(-19px)",
          }}
        >
          <Image src={images.bubles} fill />
        </div>
      )}
      <div
        className="title"
        style={
          mob600
            ? {
                width: "216px",
                fontSize: "36px",
                textAlign: "center",
                margin: "0 auto",
              }
            : { width: "" }
        }
      >
        Возможности для студентов
      </div>
      <Spacer size="md" />
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `${images.bubles}` }}
      >
        {tempItem.map((item) => (
          <div className={styles.cards}>
            <SquadCard
              icon={item.image}
              description={item.descr}
              width={296}
              height={205}
              nolink
            />
          </div>
        ))}
      </div>
      {mob768 ? <div style={{ height: "70px" }}></div> : <Spacer size="xxl" />}
    </div>
  );
}

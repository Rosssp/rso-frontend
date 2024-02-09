import Image from "next/image";
import React from "react";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import CustomLink from "../UI/customLink/CustomLink";
import styles from "./CooperateCard.module.scss";

export default function CooperateCard({ img, title, text, cardOrder }) {
  const mob768 = useMediaQuery(768);

  return (
    <>
      <div className={`${styles.jobSlider__container} `} style={{order: cardOrder ? cardOrder : 'auto'}}>
        <div className={styles.jobSlider_img}>
          <Image src={img ? img : images.shtukaturka} quality={100}/>
        </div>
        <div className={styles.jobSlider__title}>
          <div className={styles.title_text}>{title}</div>
        </div>
        <div className={styles.jobSlider__descr}>{text}</div>
        
      </div>
    </>
  );
}

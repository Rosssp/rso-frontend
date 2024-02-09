import Image from "next/image";
import Router, { useRouter } from "next/router";
import React from "react";
import styles from "./vacCard.module.scss";

export default function VacancyCard({ img, txt, href }) {
    const handleRout = (e) => {
        e.preventDefault();
        Router.push(href);
    };
    return (
        <a className={styles.vac__container} onClick={href ? handleRout : ""} href={href ? href : "#"}>
            <div className={styles.vac__image}>
                <Image src={img} objectFit="cover" width={500} height={0} />
            </div>
            <div className={styles.vac__text}>{txt}</div>
        </a>
    );
}

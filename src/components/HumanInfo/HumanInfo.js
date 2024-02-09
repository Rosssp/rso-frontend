import React from "react";
import Image from "next/image";
import images from "../../constants/images";
import styles from "./HumanInfo.module.scss";

export default function HumanInfo({
    contacts = {
        image: "",
        name: "",
        phone: "",
        tg_link: "",
    },
}) {
    return (
        <>
            <div className={styles.HumanInfo}>
                <div className={styles.image}>
                    <img
                        src={contacts.image}
                        alt={contacts.name}
                        title={contacts.name}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.content__name}>{contacts.name}</div>
                    <div className={styles.content__duty}>
                        Руководитель направления
                    </div>
                    <div className={styles.content__row}>
                        <div className={styles.icon}>
                            <Image src={images.phone} />
                        </div>
                        <a
                            className={styles.text}
                            href={`tel:${contacts.phone}`}
                        >
                            {contacts.phone}
                        </a>
                    </div>
                    <div className={styles.content__row}>
                        <div className={styles.icon}>
                            <Image src={images.tgBlue} />
                        </div>
                        <a
                            className={styles.text}
                            href={contacts.tg_link}
                            target="_blank"
                        >
                            {contacts.tg_link.replace("https://t.me/", "@")}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

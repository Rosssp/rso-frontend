import Image from "next/image";
import React from "react";
import images from "../../constants/images";
import styles from "./possiblititiesImages.module.scss";

export default function PossiblititiesImages({ img, type }) {
    return (
        <div className={`${styles.images} ${styles[type]}`}>
            {img.map((item, index) => (
                <div className={styles[`img${index + 1}`]}>
                    <Image src={item.img} />
                </div>
            ))}
        </div>
    );
}

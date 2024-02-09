import React from "react";
import Image from "next/image";
import fun from "../../../../../public/images/fun.svg";
import styles from "./SponsorCard.module.scss";

const SponsorCard = ({ name, borderColor, logo }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div
                    className={styles.header}
                    style={{
                        borderTop: "12px solid transparent",
                        borderTopColor: borderColor,
                    }}
                >
                    <div className={styles.image}>
                        <Image
                            src={process.env.NEXT_PUBLIC_MEDIA + "/" + logo}
                            alt={name}
                            fill={true}
                            
                        />
                    </div>
                </div>
                <div className={styles.body}>
                    <p className={styles.description}>{name}</p>
                </div>
            </div>
        </>
    );
};

export default SponsorCard;

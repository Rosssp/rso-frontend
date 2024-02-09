import React from "react";
import styles from "./HeadQuarterRow.module.scss";
import Image from "next/image";
import images from "../../constants/images";
import { useRouter } from "next/router";

const HeadQuarterRow = ({ title, logo, link, joinFunc, id }) => {
    const router = useRouter();
    return (
        <div className={styles.row}>
            <div className={styles.university_logo}>
                <Image
                    src={process.env.NEXT_PUBLIC_MEDIA + "/" + logo}
                    alt="Логотип"
                    width={49}
                    height={49}
                />
            </div>
            <div
                className={styles.university_title}
                onClick={() => joinFunc(id)}
            >
                {title}
            </div>
            <a className={styles.university_site} href={link} target={"_blank"}>
                <Image
                    src={images.vkBlue}
                    alt="Логотип"
                    width={"100%"}
                    height={"100%"}
                />
            </a>
        </div>
    );
};

export default HeadQuarterRow;

import Image from "next/image";
import React from "react";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import CustomLink from "../UI/customLink/CustomLink";
import styles from "./learnCard.module.scss";

export default function LearnCard({ img, title, description, type, slug }) {
    const mob768 = useMediaQuery(768);

    return (
        <>
            {mob768 ? (
                <div className={`${styles.jobSlider__container} `}>
                    <div className={styles.jobSlider_img}>
                        <Image
                            src={img}
                            objectFit="cover"
                            width={500}
                            height={100}
                        />
                    </div>
                    <div className={styles.jobSlider__title}>
                        <div
                            className={styles.title_text}
                            dangerouslySetInnerHTML={{ __html: `${title}` }}
                        ></div>
                    </div>
                    <div
                        className={styles.jobSlider__descr}
                        dangerouslySetInnerHTML={{ __html: `${description}` }}
                    >
                        {/* {description} */}
                    </div>
                    <div style={{ margin: "20px 0 40px 0" }}>
                        <CustomLink color="#0672A8" href={`/education/${slug}`}>
                            Подробнее
                        </CustomLink>
                    </div>
                </div>
            ) : (
                <div
                    className={`${styles.jobSlider__container} ${styles[type]}`}
                >
                    <div className={styles.jobSlider__title}>
                        <div
                            className={styles.title_text}
                            dangerouslySetInnerHTML={{ __html: `${title}` }}
                        >
                            {/* {title} */}
                        </div>
                        <div className={styles.title_img}>
                            <Image
                                src={img}
                                objectFit="cover"
                                width={500}
                                height={100}
                            />
                        </div>
                    </div>
                    <div
                        className={styles.jobSlider__descr}
                        dangerouslySetInnerHTML={{ __html: `${description}` }}
                    >
                        {/* {description} */}
                    </div>
                    <div style={{ margin: "20px 0 40px 0" }}>
                        <CustomLink color="#0672A8" href={`/education/${slug}`}>
                            Подробнее
                        </CustomLink>
                    </div>
                </div>
            )}
        </>
    );
}

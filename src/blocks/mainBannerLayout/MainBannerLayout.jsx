import React from "react";
import styles from "./MainBannerLayout.module.scss";

import left1 from "../../../public/images/bannerMain/left1.png";
import right1 from "../../../public/images/bannerMain/right1.png";
import groupmain from "../../../public/images/bannerMain/groupmain.png";

import Smile1 from "../../../public/images/bannerMain/Smile1.png";
import Smile2 from "../../../public/images/bannerMain/Smile2.png";
import Smile3 from "../../../public/images/bannerMain/Smile3.png";
import Smile4 from "../../../public/images/bannerMain/Smile4.png";

import Image from "next/image";
import DefaultButton from "../../components/UI/button/DefaultButton";
import useMediaQuery from "../../hooks/useMediaQuery";

const MainBannerLayout = ({ setIsOpen }) => {
    const media425 = useMediaQuery(425);

    return (
        <>
            {!media425 ? (
                <>
                    <div className={styles.wrapper}>
                        <div className={styles.grid}>
                            <div className={styles.col}>
                                <div className={styles.banner_bg_left}>
                                    <Image
                                        className={styles.left_img}
                                        src={left1}
                                        alt="Мужчина"
                                        layout="fill"
                                        quality={100}
                                    />
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.content}>
                                    <div className={styles.body}>
                                        <p className={styles.name}>
                                            Студенческие отряды Самарской
                                            области
                                        </p>
                                        <h1 className={styles.title}>
                                            Построй успешную <br /> карьеру с
                                            нами
                                        </h1>
                                        <DefaultButton
                                            type="default"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            Хочу вступить
                                        </DefaultButton>
                                    </div>
                                    <Image
                                        src={Smile1}
                                        alt={"Довольный студент"}
                                        quality={100}
                                        className={styles.smile1}
                                        width={75}
                                        height={75}
                                    />
                                    <Image
                                        src={Smile2}
                                        alt={"Довольный студент"}
                                        quality={100}
                                        className={styles.smile2}
                                        width={98}
                                        height={98}
                                    />
                                    <Image
                                        src={Smile3}
                                        alt={"Довольный студент"}
                                        quality={100}
                                        className={styles.smile3}
                                        width={106}
                                        height={91}
                                    />
                                    <Image
                                        src={Smile4}
                                        alt={"Довольный студент"}
                                        quality={100}
                                        className={styles.smile4}
                                        width={106}
                                        height={106}
                                    />
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.banner_bg_right}>
                                    <Image
                                        className={styles.right_img}
                                        src={right1}
                                        alt="Женщина"
                                        layout="fill"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.mobile__banner}>
                        <h1
                            className={styles.mobile__title}
                            style={{ marginTop: "20px" }}
                        >
                            Построй успешную <br /> карьеру с нами
                        </h1>
                        <div className={styles.mobile__wrapper}>
                            <div className={styles.mobile__image}>
                                <Image
                                    src={groupmain}
                                    alt="Довольные студенты"
                                    width={279}
                                    height={422}
                                    quality={100}
                                />
                            </div>
                            <DefaultButton
                                onClick={() => setIsOpen(true)}
                                type="default"
                            >
                                Хочу вступить
                            </DefaultButton>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default MainBannerLayout;

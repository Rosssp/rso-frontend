import React from "react";
import styles from "./JoinBannerLayout.module.scss";
import BenefitCard from "../../components/UI/cards/benefitCard/BenefitCard";
import DefaultButton from "../../components/UI/button/DefaultButton";
import CustomLink from "../../components/UI/customLink/CustomLink";
import Spacer from "../../components/UI/spacer/Spacer";
import Image from "next/image";
import joinLeft from "../../../public/images/bannerJoin/joinLeft.png";
import joinRight from "../../../public/images/bannerJoin/JoinRight.png";
import joinMobile from "../../../public/images/bannerJoin/joinMobile.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import SquadLayout from "../squadLayout/SquadLayout";
import images from "../../constants/images";
import { useRouter } from "next/router";

const JoinBannerLayout = ({ btnText = "Хочу вступить", HQ }) => {
    const media900 = useMediaQuery(900);

    const cardContent = [
        {
            title: "Обучение",
            description: "Бесплатное и с трудоустройством",
            icon: images.study,
        },
        {
            title: "Работа",
            description: "Интересная и надежная. И проблем с учебой не будет",
            icon: images.work,
        },
        {
            title: "Путешествия",
            description: "Путешествия по всей России",
            icon: images.travel,
        },
        {
            title: "Яркая жизнь",
            description: "Насыщенная событиями, впечатлениями, друзьями",
            icon: images.fun,
        },
    ];

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/life");
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Spacer size="xl" />
                    <div className={styles.grid}>
                        <div className={styles.col}>
                            <BenefitCard size="sm" {...cardContent[0]} />
                        </div>
                        <div className={styles.col}>
                            <div className={styles.col_sub}>
                                <h2 className={styles.title}>
                                    Студенческие отряды <br /> Самарской области
                                    - это
                                </h2>
                            </div>
                            <div className={styles.col_sub}>
                                <BenefitCard size="sm" {...cardContent[1]} />
                                <BenefitCard size="sm" {...cardContent[2]} />
                            </div>
                            <div className={styles.control}>
                                <Spacer size="md" />
                                <DefaultButton
                                    type="default"
                                    onClick={handleClick}
                                    hrefLink={'/life'}
                                >
                                    {btnText}
                                </DefaultButton>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <BenefitCard size="sm" {...cardContent[3]} />
                        </div>
                    </div>
                    {/* <div className={styles.control_mobile}>
            <CustomLink color="white">Узнать подробнее</CustomLink>
            <DefaultButton type="default">{btnText}</DefaultButton>
          </div> */}
                </div>
                <div className={styles.bg}>
                    <div className={styles.bg_left}>
                        <Image
                            className={styles.left_img}
                            src={joinLeft}
                            alt="Мужчина"
                            layout="fill"
                            quality={100}
                        />
                    </div>
                    <div className={styles.bg_right}>
                        <Image
                            className={styles.right_img}
                            src={joinRight}
                            alt="Студенты"
                            layout="fill"
                            quality={100}
                        />
                    </div>
                </div>

                {media900 && (
                    <>
                        <Spacer size="lg" />
                        <div className={styles.mobile_img}>
                            <Image
                                className={styles.left_img}
                                src={joinMobile}
                                alt="Мужчина"
                                layout="fill"
                                quality={100}
                            />
                        </div>
                        <Spacer size="xl" />
                        <SquadLayout
                            HQ={HQ}
                            titleColor="white"
                            textColor="white"
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default JoinBannerLayout;

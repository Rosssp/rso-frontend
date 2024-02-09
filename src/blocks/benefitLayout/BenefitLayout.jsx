import React, { useEffect, useState } from "react";
import styles from "./BenefitLayout.module.scss";
import BenefitCard from "../../components/UI/cards/benefitCard/BenefitCard";
import DefaultButton from "../../components/UI/button/DefaultButton";
import CustomLink from "../../components/UI/customLink/CustomLink";
import Spacer from "../../components/UI/spacer/Spacer";
import images from "../../constants/images";
import MainPageBenefitCard from "../../components/UI/cards/MainPageBenefitCard/MainPageBenefitCard";

const BenefitLayout = ({ forStudent, setIsOpen }) => {
    const [first, setFirst] = useState([
        { title: "Весело" },
        { descr: "Быть в постоянном движении и центре событий" },
        { icon: images.fun },
    ]);
    const [second, setSecond] = useState([
        { title: "Перспективно" },
        { descr: "Строить карьеру в успешной компании уже сейчас" },
        { icon: images.perspective },
    ]);
    const [third, setThird] = useState([
        { title: "Круто" },
        { descr: "Строить карьеру в успешной компании уже сейчас" },
        { icon: images.fire },
    ]);

    if (forStudent === undefined) {
        ("");
    } else {
        useEffect(() => {
            setFirst([
                { title: forStudent[0]?.banner_name || first[0].title },
                { descr: forStudent[0]?.text || first[1].descr },
                {
                    icon: forStudent[0]?.banner_announce
                        ? process.env.NEXT_PUBLIC_MEDIA +
                          "/" +
                          forStudent[0]?.banner_announce
                        : first[2].icon,
                },
            ]);
            setSecond([
                { title: forStudent[1]?.banner_name || second[0].title },
                { descr: forStudent[1]?.text || second[1].descr },
                {
                    icon: forStudent[1]?.banner_announce
                        ? process.env.NEXT_PUBLIC_MEDIA +
                          "/" +
                          forStudent[1]?.banner_announce
                        : second[2].icon,
                },
            ]);
            setThird([
                { title: forStudent[2]?.banner_name || third[0].title },
                { descr: forStudent[2]?.text || third[1].descr },
                {
                    icon: forStudent[2]?.banner_announce
                        ? process.env.NEXT_PUBLIC_MEDIA +
                          "/" +
                          forStudent[2]?.banner_announce
                        : third[2].icon,
                },
            ]);
        }, [forStudent]);
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.grid}>
                    <div className={styles.col}>
                        {!forStudent[0] ? (
                            <>
                                {" "}
                                <BenefitCard
                                    title={first[0]?.title}
                                    description={first[1]?.descr}
                                    icon={first[2]?.icon}
                                />
                            </>
                        ) : (
                            <>
                                <MainPageBenefitCard
                                    title={first[0]?.title}
                                    description={first[1]?.descr}
                                    icon={first[2]?.icon}
                                />
                            </>
                        )}
                    </div>
                    <div className={styles.col}>
                        {!forStudent[1] ? (
                            <>
                                {" "}
                                <BenefitCard
                                    title={second[0]?.title}
                                    description={second[1]?.descr}
                                    icon={second[2]?.icon}
                                />
                            </>
                        ) : (
                            <>
                                {" "}
                                <MainPageBenefitCard
                                    title={second[0]?.title}
                                    description={second[1]?.descr}
                                    icon={second[2]?.icon}
                                />
                            </>
                        )}
                        <div className={styles.control}>
                            <Spacer size="md" />
                            <DefaultButton type="default" onClick={setIsOpen}>
                                Хочу вступить
                            </DefaultButton>
                            <Spacer size="md" />
                            <CustomLink href={"/join"}>
                                Узнать подробнее
                            </CustomLink>
                        </div>
                    </div>
                    <div className={styles.col}>
                        {!forStudent[2] ? (
                            <>
                                {" "}
                                <BenefitCard
                                    title={third[0]?.title}
                                    description={third[1]?.descr}
                                    icon={third[2]?.icon}
                                />
                            </>
                        ) : (
                            <>
                                {" "}
                                <MainPageBenefitCard
                                    title={third[0]?.title}
                                    description={third[1]?.descr}
                                    icon={third[2]?.icon}
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.control_mobile}>
                    <CustomLink href={"/join"}>Узнать подробнее</CustomLink>
                    <DefaultButton
                        type="default"
                        onClick={() => setIsOpen(true)}
                    >
                        Хочу вступить
                    </DefaultButton>
                </div>
            </div>
        </>
    );
};

export default BenefitLayout;

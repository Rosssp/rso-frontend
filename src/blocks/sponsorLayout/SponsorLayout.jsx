import React, { useEffect, useState } from "react";
import styles from "./SponsorLayout.module.scss";
import DefaultButton from "../../components/UI/button/DefaultButton";
import CustomLink from "../../components/UI/customLink/CustomLink";
import Spacer from "../../components/UI/spacer/Spacer";
import SponsorCard from "../../components/UI/cards/sponsorCard/SponsorCard";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useRouter } from "next/router";
const SponsorLayout = ({
    title = "С нами работают",
    showExtButtons = true,
    setIsOpen,
    withUsSlider,
}) => {
    const router = useRouter();
    const handleClick = (e) => {
        router.push("/collaborate#Coop");
    };

    const media425 = useMediaQuery(425);

    const [newList, setNewList] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    useEffect(() => {
        const sdlkjf = () => {
            setIsLoad(false);
            setNewList(shuffle(withUsSlider));
            setIsLoad(true);
        };

        sdlkjf();
    }, [withUsSlider]);

    const color = [
        "#84A5FF",
        "#FFE07C",
        "#00EFD8",
        "#FFE07C",
        "#00EFD8",
        "#84A5FF",
        "#84A5FF",
        "#FFE07C",
        "#00EFD8",
        "#FFE07C",
        "#00EFD8",
        "#84A5FF",
        "#84A5FF",
        "#FFE07C",
        "#00EFD8",
        "#FFE07C",
        "#00EFD8",
        "#84A5FF",
    ];

    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{title}</h2>
                <Spacer size="md" />
                <div className={styles.list}>
                    {newList.map((item, index) => (
                        <SponsorCard
                            name={item.name}
                            logo={item.image}
                            key={index}
                            borderColor={color[index]}
                        />
                    ))}
                </div>

                {showExtButtons && (
                    <>
                        <Spacer size="md" />
                        <div className={styles.buttons}>
                            <DefaultButton
                                type="default"
                                onClick={() => setIsOpen(true)}
                            >
                                Хочу вступить
                            </DefaultButton>

                            {media425 ? (
                                <CustomLink href={"/collaborate#Coop"}>
                                    Хочу с вами <br /> сотрудничать
                                </CustomLink>
                            ) : (
                                <DefaultButton
                                    type="outline_blueMain"
                                    onClick={() => handleClick()}
                                    hrefLink={'/collaborate#Coop'}
                                >
                                    Хочу с вами сотрудничать
                                </DefaultButton>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default SponsorLayout;

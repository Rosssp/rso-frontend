import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Spacer from "../../components/UI/spacer/Spacer";
import images from "../../constants/images";
import Image from "next/image";
import SponsorCard from "../../components/UI/cards/sponsorCard/SponsorCard";

import styles from "./sponsorLayoutSlider.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import arraySlicer from "../../../services/arraySlicer.service";
import DefaultButton from "../../components/UI/button/DefaultButton";
import CustomLink from "../../components/UI/customLink/CustomLink";
import { useRouter } from "next/router";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

export default function SponsorLayoutSlider({
    title = "Наши студенты уже работают",
    studentsWorked,
    showExtButtons = false,
    setIsOpen,
}) {
    const mob830 = useMediaQuery(830);
    const desc1166 = useMediaQuery(1166);
    const media600 = useMediaQuery(600);

    const cardSize = 267;

    const router = useRouter();
    const handleClick = (e) => {
        router.push("/collaborate#Coop");
    };

    const [newList, setNewList] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    useEffect(() => {
        const sdlkjf = () => {
            // setIsLoad(false);
            setNewList(shuffle(studentsWorked));
            setIsLoad(true);
        };

        sdlkjf();
    }, [studentsWorked]);

    const arraySlice = arraySlicer(newList, 6);
    const mobSlice = arraySlicer(newList, 4);

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
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <Spacer size="lg" />
            <div className={styles.container}>
                {mob830 ? (
                    <>
                        <div
                            className={styles.card__wrapper}
                            style={{
                                width: `${studentsWorked.length * cardSize}px`,
                            }}
                        >
                            {newList.map((item, index) => (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "14px",
                                    }}
                                >
                                    <SponsorCard
                                        logo={item.logo}
                                        name={item.name}
                                        borderColor={color[index]}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        {!isLoad ? (
                            <LoadingIcon />
                        ) : (
                            <>
                                {studentsWorked.length > 6 ? (
                                    <div
                                        className={"prev "}
                                        style={{ paddingLeft: "4%" }}
                                    >
                                        <Image
                                            src={images.Arrow}
                                            style={{
                                                transform: "scale(-1)",
                                            }}
                                        />
                                    </div>
                                ) : (
                                    desc1166 &&
                                    studentsWorked.length > 4 && (
                                        <div
                                            className={"prev "}
                                            style={{ paddingLeft: "4%" }}
                                        >
                                            <Image
                                                src={images.Arrow}
                                                style={{
                                                    transform: "scale(-1)",
                                                }}
                                            />
                                        </div>
                                    )
                                )}

                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={60}
                                    navigation={{
                                        nextEl: ".next",
                                        prevEl: ".prev",
                                        lockClass: "disabled",
                                    }}
                                    modules={[Navigation]}
                                    loop={false}
                                    className={styles.swiper__container}
                                >
                                    {desc1166 ? (
                                        <>
                                            {mobSlice.map((item) => (
                                                <SwiperSlide
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        flexWrap: "wrap",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection:
                                                                "row",
                                                            flexWrap: "wrap",
                                                            gap: "60px",
                                                            justifyContent:
                                                                "center",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        {item.map(
                                                            (
                                                                subitem,
                                                                index
                                                            ) => (
                                                                <SponsorCard
                                                                    logo={
                                                                        subitem.logo
                                                                    }
                                                                    name={
                                                                        subitem.name
                                                                    }
                                                                    borderColor={
                                                                        color[
                                                                            index
                                                                        ]
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {arraySlice.map((item) => (
                                                <SwiperSlide
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        flexWrap: "wrap",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection:
                                                                "row",
                                                            flexWrap: "wrap",
                                                            gap: "60px",
                                                            justifyContent:
                                                                "center",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        {item.map(
                                                            (
                                                                subitem,
                                                                index
                                                            ) => (
                                                                <SponsorCard
                                                                    logo={
                                                                        subitem.logo
                                                                    }
                                                                    name={
                                                                        subitem.name
                                                                    }
                                                                    borderColor={
                                                                        color[
                                                                            index
                                                                        ]
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </>
                                    )}
                                </Swiper>

                                {studentsWorked.length > 6 ? (
                                    <div
                                        className={"next"}
                                        style={{ paddingRight: "4%" }}
                                    >
                                        <Image src={images.Arrow} />
                                    </div>
                                ) : (
                                    desc1166 &&
                                    studentsWorked.length > 4 && (
                                        <div
                                            className={"next"}
                                            style={{ paddingRight: "4%" }}
                                        >
                                            <Image src={images.Arrow} />
                                        </div>
                                    )
                                )}
                            </>
                        )}
                    </>
                )}
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

                        {media600 ? (
                            <CustomLink href={"/collaborate#Coop"}>
                                Хочу с вами <br /> сотрудничать
                            </CustomLink>
                        ) : (
                            <DefaultButton
                                type="outline_blueMain"
                                onClick={() => handleClick()}
                                hrefLink={"/collaborate#Coop"}
                            >
                                Хочу с вами сотрудничать
                            </DefaultButton>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

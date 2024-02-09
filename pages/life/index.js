import React, { useEffect, useRef, useState } from "react";
import Ptf from "../../src/components/payTheFee/Ptf";
import Complaints from "../../src/components/complaints/Complaints";
import DefaultButton from "../../src/components/UI/button/DefaultButton";
import Spacer from "../../src/components/UI/spacer/Spacer";
import Image from "next/image";
import images from "../../src/constants/images";

import styles from "./life.module.scss";
import LifeFirstSection from "../../src/blocks/lifeFirstSection/LifeFirstSection";
import LifePageSectionSecond from "../../src/blocks/lifePageSectionSecond/LifePageSectionSecond";
import fetchersService from "../../services/fetchers.service";
import Head from "next/head";

export default function Life({ news, banner, vacancy, education }) {
    const [open, setOpen] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);
    const [orderFirst, setOrderFirst] = useState(2);
    const [orderSecond, setOrderSecond] = useState(2);
    const bannerAnnounce = banner?.banners_announce;

    const handleOpenFirst = () => {
        setOrderFirst((prev) => 1 + 2 * !!!openSecond);
        setOrderSecond((prev) => orderFirst + 1);
        setOpen((prev) => !prev);
    };

    const handleOpenSecond = () => {
        setOrderSecond((prev) => 1 + 2 * !!!open);
        setOrderFirst((prev) => orderSecond + 1);
        setOpenSecond((prev) => !prev);
    };

    return (
        <>
            <Head>
                <title>Жизнь в РСО</title>
                <meta name="webjox" content="monitoring" />

                <meta
                    name="description"
                    content="Официальная страница Российских студенческих отрядов"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Spacer size="xxl" />
            <div className={styles.mainBlock}>
                <div className={styles.side}>
                    <div className={styles.title}>жизнь в рсо</div>
                    <div className={styles.buttons}>
                        <DefaultButton
                            type="blue"
                            icon={images.triangle}
                            onClick={() => handleOpenFirst()}
                            styleIcon={
                                open === true
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)"
                            }
                        >
                            Хочу быть в курсе событий
                        </DefaultButton>
                        <DefaultButton
                            type="default"
                            icon={images.triangle}
                            onClick={() => handleOpenSecond()}
                            styleIcon={
                                openSecond === true
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)"
                            }
                        >
                            Возможности
                        </DefaultButton>
                    </div>
                </div>
                <div className={styles.side}>
                    <div className={styles.image}>
                        <Image
                            src={images.banner}
                            alt="lol"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
            <div
                id="sectionsContainer"
                style={{
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <LifeFirstSection
                    open={open}
                    setOpen={setOpen}
                    news={news}
                    banner={bannerAnnounce}
                    style={{ order: orderFirst }}
                />

                <LifePageSectionSecond
                    openSecond={openSecond}
                    setOpenSecond={setOpenSecond}
                    vacancy={vacancy}
                    education={education}
                    style={{ order: orderSecond }}
                />
            </div>

            <Ptf />
            <Complaints />
        </>
    );
}

export async function getServerSideProps() {
    const news = await fetchersService.getAll("life_rso/").then(({ data }) => {
        return data;
    });
    const banner = await fetchersService
        .getAll("rso-banners/")
        .then(({ data }) => {
            return data;
        });
    const vacancy = await fetchersService
        .getAll("vacancy/")
        .then(({ data }) => {
            return data;
        });

    const education = await fetchersService
        .getAll("education/")
        .then(({ data }) => {
            return data;
        });
    return {
        props: {
            news,
            banner,
            vacancy,
            education,
        },
    };
}

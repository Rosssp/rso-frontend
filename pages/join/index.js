import React from "react";
import LazyIframe from "../../src/components/LazyYouTube/LazyYouTube";
import SquadLayout from "../../src/blocks/squadLayout/SquadLayout";
import Spacer from "../../src/components/UI/spacer/Spacer";
import FindHeadquarters from "../../src/blocks/findHeadquarters/FindHeadquarters";
import FaqLayout from "../../src/blocks/FAQLayout/FaqLayout";
import JoinBannerLayout from "../../src/blocks/JoinBannerLayout/JoinBannerLayout";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import styles from "./join.module.scss";
import fetchersService from "../../services/fetchers.service";
import Head from "next/head";

export default function Join({ headquartersServer, faq }) {
    const media900 = useMediaQuery(900);

    return (
        <>
            <Head>
                <title>Хочу вступить в РСО</title>
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
            <div>
                <JoinBannerLayout
                    btnText="Узнать подробнее"
                    HQ={headquartersServer}
                />
                {!media900 && (
                    <>
                        <Spacer size="xl" />
                        <SquadLayout HQ={headquartersServer} />
                    </>
                )}
                <Spacer size="xl" />
                <div className={styles.video}>
                    <iframe
                        src="https://vk.com/video_ext.php?oid=-10616834&id=456239175&hash=37ab8e2744fd9fdd&hd=2"
                        width="853"
                        height="480"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <Spacer size="xl" />
                <div className={styles.bg__white}>
                    <FindHeadquarters />
                </div>
                <Spacer size="md" />
                <FaqLayout faq={faq} />
                <Spacer size="md" />
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const headquartersServer = await fetchersService
        .getAll("headquarters")
        .then(({ data }) => {
            let result = [];
            data.map((item) => {
                const renamed = ({ name }) => ({ label: name, value: name });
                result.push(renamed(item));
            });
            return result;
        });

    const faq = await fetchersService.getAll("faq").then(({ data }) => {
        return data;
    });

    return {
        props: {
            headquartersServer,
            faq,
        },
    };
}

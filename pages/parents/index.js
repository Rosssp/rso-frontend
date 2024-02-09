import Head from "next/head";
import React from "react";
import fetchersService from "../../services/fetchers.service";
import FaqLayout from "../../src/blocks/FAQLayout/FaqLayout";
import SponsorLayout from "../../src/blocks/sponsorLayout/SponsorLayout";
import SponsorLayoutSlider from "../../src/blocks/sponsorLayoutSlider/SponsorLayoutSlider";
import SquadLayout from "../../src/blocks/squadLayout/SquadLayout";
import PossiblititiesImages from "../../src/components/possiblititiesImages/PossiblititiesImages";
import SquadPossibility from "../../src/components/squadPossibility/SquadPossibility";
import StorySquadSlider from "../../src/components/storySquadSlider/StorySquadSlider";
import Spacer from "../../src/components/UI/spacer/Spacer";
import images from "../../src/constants/images";
import useMediaQuery from "../../src/hooks/useMediaQuery";

import styles from "./parents.module.scss";

export default function Parents({ faq, mainPageSliders }) {
    const mob480 = useMediaQuery(480);
    const mob840 = useMediaQuery(840);
    const mob600 = useMediaQuery(600);

    const imgs = [
        { img: images.Parentsfirst },
        { img: images.ParentsSecond },
        { img: images.ParentsThird },
        { img: images.ParentsFour },
    ];

    return (
        <>
            <Head>
                <title>Родителям - РСО</title>
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
                {mob840 ? (
                    <>
                        <Spacer size="xl" />
                        <Spacer size="xl" />
                    </>
                ) : (
                    <>
                        <Spacer size="xxl" />
                    </>
                )}

                <div className={`title ${styles.title}`}>
                    <span style={mob480 ? { color: "#2B3A65" } : { color: "" }}>
                        Студенческие отряды -
                    </span>
                    &nbsp;это организация с богатой историей
                </div>
                <Spacer size="sm" />
                <StorySquadSlider />
                <Spacer size="md" />
                {mob840 ? (
                    ""
                ) : (
                    <>
                        <div
                            style={{
                                margin: "0 auto",
                                width: "806px",
                                height: "562px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <PossiblititiesImages img={imgs} type="parents" />
                        </div>
                        <Spacer size="xl" />
                    </>
                )}
                <div className={`title ${styles.title}`}>
                    <span>Студенческие отряды сейчас - это </span>
                    &nbsp;возможность для вашего ребенка
                </div>
                <Spacer size="md" />
                <SquadPossibility />
                <Spacer size="xl" />

                <div
                    style={
                        mob600
                            ? {
                                  backgroundColor: "#5477D8",
                                  padding: "40px 0 70px",
                              }
                            : {
                                  backgroundColor: "",
                                  padding: "0",
                              }
                    }
                >
                    <SquadLayout
                        open={true}
                        textColor="white"
                        titleColor={mob600 && "white"}
                    />
                </div>
                <Spacer size="xl" />

                <SponsorLayoutSlider studentsWorked={mainPageSliders || []} />
                <Spacer size="xl" />
                <FaqLayout documentsBtn={true} faq={faq || []} />
                <Spacer size="md" />
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const faq = await fetchersService.getAll("faq").then(({ data }) => {
        return data;
    });

    const mainPageSliders = await fetchersService
        .getAll("work_with_us_slider/")
        .then(({ data }) => {
            let result = [];
            data.slider.map((item) => {
                const renamed = ({ image, name }) => ({
                    logo: image,
                    name: name,
                });
                result.push(renamed(item));
            });
            return result;
        });

    return {
        props: {
            faq,
            mainPageSliders,
        },
    };
}

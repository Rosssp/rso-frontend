import FullSlider from "../src/components/fullSlider/FullSlider";
import MainBannerLayout from "../src/blocks/mainBannerLayout/MainBannerLayout";
import BenefitLayout from "../src/blocks/benefitLayout/BenefitLayout";
import SquadLayout from "../src/blocks/squadLayout/SquadLayout";
import Spacer from "../src/components/UI/spacer/Spacer";
import SponsorLayout from "../src/blocks/sponsorLayout/SponsorLayout";
import StorySliderLayout from "../src/blocks/storySliderLayout/StorySliderLayout";
import useMediaQuery from "../src/hooks/useMediaQuery";
import fetchersService from "../services/fetchers.service";
import HeaderFullSliderSecond from "../src/components/fullSlider/FullSliderSecond";

import DefaultForm from "../src/components/DefaultForm/DefaultForm";
import { useState } from "react";
import CustomModal from "../src/components/modal/Modal";
import SponsorLayoutSlider from "../src/blocks/sponsorLayoutSlider/SponsorLayoutSlider";
import Head from "next/head";
import images from "../src/constants/images";
// vsem privet eto initial commit of RSO website next js project website sitstetsiteisitieis
// ZATKNIS'

function HomePage({
    historyList,
    mainPage,
    headquartersServer,
    withUsSlider,
    mainPageSliders,
}) {
    const media900 = useMediaQuery(900);

    const forStudent = mainPage?.banners_benefit_student;
    const bannerAnnounce = mainPage?.banners_announce;
    const additionalBanners = mainPage?.additional_banners;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Главная - РСО</title>
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
            <Spacer size="md" />
            <Spacer size="xl" />
            <MainBannerLayout setIsOpen={setIsOpen} />
            <Spacer size="xl" />
            {media900 ? (
                <>
                    <div style={{ padding: "0 20px", marginTop: "20px" }}>
                        <BenefitLayout
                            forStudent={forStudent}
                            setIsOpen={setIsOpen}
                        />
                    </div>
                </>
            ) : (
                <>
                    <BenefitLayout
                        forStudent={forStudent}
                        setIsOpen={setIsOpen}
                    />
                </>
            )}
            {!media900 ? (
                <>
                    <Spacer size="xl" />
                    <SquadLayout HQ={headquartersServer} />
                </>
            ) : (
                <></>
            )}

            <Spacer size="xl" />
            <StorySliderLayout historyList={historyList} />

            {media900 ? (
                <>
                    <div
                        style={{
                            paddingTop: "68px",
                            backgroundColor: "#5477D8",
                            paddingBottom: "70px",
                        }}
                    >
                        <SquadLayout
                            titleColor="white"
                            textColor="white"
                            HQ={headquartersServer}
                        />
                    </div>
                </>
            ) : (
                <></>
            )}
            <Spacer size="sm" />
            <div style={{ margin: "0 " }}>
                {bannerAnnounce.length ? (
                    <>
                        <Spacer size="lg" />

                        <FullSlider banner={bannerAnnounce} />
                    </>
                ) : (
                    <></>
                )}
                {additionalBanners.length ? (
                    <>
                        <Spacer size="lg" />
                        <HeaderFullSliderSecond banner={additionalBanners} />
                    </>
                ) : (
                    <></>
                )}
            </div>
            <Spacer size="md" />
            <SponsorLayoutSlider
                studentsWorked={mainPageSliders}
                showExtButtons={true}
                setIsOpen={setIsOpen}
                title={"С нами работают"}
            />
            <Spacer size="md" />

            <CustomModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <DefaultForm
                    type="join"
                    modal__info="Заполните заявку и с вами свяжется наш специалист"
                />
            </CustomModal>
        </>
    );
}

export default HomePage;

export async function getServerSideProps({ params }) {
    const historyList = await fetchersService
        .getAll("history/")
        .then(({ data }) => {
            return data;
        });
    const headquartersServer = await fetchersService
        .getAll("headquarters/")
        .then(({ data }) => {
            let result = [];
            data.map((item) => {
                const renamed = ({ name }) => ({ label: name, value: name });
                result.push(renamed(item));
            });
            return result;
        });

    const mainPage = await fetchersService
        .getAll("mainpage/")
        .then(({ data }) => {
            return data;
        });

    const mainPageSliders = await fetchersService
        .getAll("work_with_us_slider")
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
            historyList,
            mainPage,
            headquartersServer,
            mainPageSliders,
        },
    };
}

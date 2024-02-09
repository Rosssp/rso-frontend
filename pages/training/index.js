import Head from "next/head";
import React from "react";
import fetchersService from "../../services/fetchers.service";
import JobSliderLayout from "../../src/blocks/jobSliderLayout/jobSliderLayout";
import OpportunitiesOfOrganizationsLayout from "../../src/blocks/opportunitiesOfOrganizationsLayout/opportunitiesOfOrganizationsLayout";
import SquadTrainingLayout from "../../src/blocks/squadTrainingLayout/SquadTrainingLayout";
import Spacer from "../../src/components/UI/spacer/Spacer";
import useMediaQuery from "../../src/hooks/useMediaQuery";

export default function Training({ education }) {
    const mob768 = useMediaQuery(768);
    return (
        <>
            <Head>
                <title>Обучения в РСО</title>
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
                {mob768 ? (
                    <div style={{ height: "120px" }}></div>
                ) : (
                    <Spacer size="xxl" />
                )}
                <SquadTrainingLayout />
                <JobSliderLayout
                    type="padding"
                    wts={true}
                    education={education}
                />
                <OpportunitiesOfOrganizationsLayout />
                <Spacer size="md" />
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const education = await fetchersService
        .getAll("education")
        .then(({ data }) => {
            return data;
        });
    return {
        props: {
            education,
        },
    };
}

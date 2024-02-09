import Image from "next/image";
import { useRouter } from "next/router";
import fetchersService from "../../../services/fetchers.service";
import JobsListPreview from "../../../src/components/jobsListPreview/JobsListPreview";
import SquadCard from "../../../src/components/UI/cards/squadCard/SquadCard";
import Spacer from "../../../src/components/UI/spacer/Spacer";
import WantJoinBlock from "../../../src/components/WantJoinBlock/WantJoinBlock";
import images from "../../../src/constants/images";

import styles from "./index.module.scss";
import trimText from "../../../services/trimText.service";
import DefaultButton from "../../../src/components/UI/button/DefaultButton";
import CustomModal from "../../../src/components/modal/Modal";
import DefaultForm from "../../../src/components/DefaultForm/DefaultForm";
import { useState } from "react";
import Head from "next/head";

export default function SingleJob({ singleJob, jobs }) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const initialFormData = {
        vacancy_id: singleJob.id,
        full_name: "",
        phone_number: "",
        email: "",
        communication_method: "",
        organization: "",
        processed: false,
    };

    const dateFormater = (date) => {
        return date.split("-").reverse().join(".");
    };

    return (
        <>
            <Head>
                <title>{singleJob.title} - Работа в РСО</title>
                <meta name="webjox" content="monitoring" />

                <meta
                    name="description"
                    content={`Работа на должности ${singleJob.title}`}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Spacer size="md" />
            <Spacer size="xl" />
            <div className={styles.container}>
                <div className={styles.jobs}>
                    <div className={styles.jobs_header}>
                        <span className={styles.date}>
                            {dateFormater(singleJob.date_of_creation)}
                        </span>
                    </div>
                    <div className={styles.jobs_body}>
                        <div className={styles.jobs_image}>
                            <Image
                                src={
                                    process.env.NEXT_PUBLIC_MEDIA +
                                    "/" +
                                    singleJob.image
                                }
                                objectFit="cover"
                                width={500}
                                height={0}
                                alt={singleJob.title}
                            />
                        </div>
                        <div className={styles.jobs_title}>
                            <p>{singleJob.title}</p>
                        </div>
                        <div className={styles.jobs_content}>
                            <div
                                className={styles.jobs_text}
                                dangerouslySetInnerHTML={{
                                    __html: `${singleJob.text}`,
                                }}
                            ></div>
                            <div style={{ marginTop: "16px" }}>
                                <DefaultButton
                                    type={"default"}
                                    onClick={() => setIsOpen(true)}
                                >
                                    Хочу работать
                                </DefaultButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.recent}>
                    <h1 className={styles.jobsListPreview__title}>
                        Другие Вакансии
                    </h1>

                    <div className={styles.recent_list}>
                        {jobs.map((item, index) => (
                            <SquadCard
                                title={item.title}
                                icon={`${process.env.NEXT_PUBLIC_MEDIA}/${item.image}`}
                                description={trimText(
                                    item.text.replace(/<.*?>|&.*?;/g, ""),
                                    80,
                                    "..."
                                )}
                                key={index}
                                routerTo="jobs"
                                href={item.slug}
                                height={"auto"}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Spacer size="md" />

            <CustomModal
                title="Хочу работать"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
                <DefaultForm type="work" formInitialValues={initialFormData} />
            </CustomModal>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const singleJob = await fetchersService
        .get("vacancy", params.slug)
        .then(({ data }) => {
            return data;
        });

    const jobs = await fetchersService.getAll("vacancy").then(({ data }) => {
        // return data.filter((el) => el.slug !== singleJob.slug).slice(0, 4);
        return data.slice(0, 4);
    });
    return {
        props: {
            singleJob,
            jobs,
        },
    };
}

import Image from "next/image";
import fetchersService from "../../../services/fetchers.service";
import SquadCard from "../../../src/components/UI/cards/squadCard/SquadCard";
import Spacer from "../../../src/components/UI/spacer/Spacer";
import WantJoinBlock from "../../../src/components/WantJoinBlock/WantJoinBlock";

import styles from "./index.module.scss";
import trimText from "../../../services/trimText.service";
import Head from "next/head";

export default function SingleJob({ singleJob, jobs }) {
    return (
        <>
            <Head>
                <title>{singleJob?.title} - Мероприятия в РСО</title>
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
            <div className={styles.container}>
                <div className={styles.jobs}>
                    <div className={styles.jobs_header}>
                        <span className={styles.date}>
                            {singleJob?.date_of_creation}
                        </span>
                    </div>

                    <div className={styles.jobs_body}>
                        <div className={styles.jobs_image}>
                            <Image
                                src={
                                    process.env.NEXT_PUBLIC_MEDIA +
                                    "/" +
                                    singleJob?.image
                                }
                                objectFit="cover"
                                width={500}
                                height={0}
                                alt={singleJob?.title}
                            />
                        </div>
                        <div className={styles.jobs_title}>
                            <p>{singleJob?.title}</p>
                        </div>
                        <div className={styles.jobs_content}>
                            <div
                                className={styles.jobs_text}
                                dangerouslySetInnerHTML={{
                                    __html: `${singleJob?.text}`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className={styles.recent}>
                    <h1 className={styles.jobsListPreview__title}>
                        Другие Мероприятия
                    </h1>
                    <div className={styles.recent_list}>
                        {jobs?.map((item, index) => (
                            <SquadCard
                                title={item.title}
                                icon={`${process.env.NEXT_PUBLIC_MEDIA}/${item.image}`}
                                description={trimText(
                                    item.text.replace(/<.*?>|&.*?;/g, ""),
                                    80,
                                    "..."
                                )}
                                height="fit-content"
                                key={index}
                                routerTo="events"
                                href={item.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Spacer size="xl" />
            <WantJoinBlock title="Хочу принять участие в этом мероприятии" />
        </>
    );
}

export async function getServerSideProps({ params }) {
    const singleJob = await fetchersService
        .get("events", params.slug)
        .then(({ data }) => {
            return data;
        });

    const jobs = await fetchersService.getAll("events").then(({ data }) => {
        return data.filter((el) => el.slug !== singleJob.slug).slice(0, 4);
    });
    return {
        props: {
            singleJob,
            jobs,
        },
    };
}

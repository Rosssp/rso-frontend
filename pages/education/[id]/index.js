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
import Head from "next/head";

export default function SingleEdu({ currentId, educationList }) {
    const router = useRouter();
    const singleEdu = educationList.find((item) => item.id == currentId);
    return (
        <>
            <Head>
                <title>{singleEdu?.title} - Обучения в РСО</title>
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
                        {/* <span className={styles.date}>{singleEdu?.short_description.replace(/<.*?>|&.*?;/g, "")}</span> */}
                    </div>

                    <div className={styles.jobs_body}>
                        <div className={styles.jobs_image}>
                            <Image
                                src={
                                    process.env.NEXT_PUBLIC_MEDIA +
                                    "/" +
                                    singleEdu?.photo
                                }
                                objectFit="cover"
                                width={500}
                                height={0}
                                alt={singleEdu?.title.replace(
                                    /<.*?>|&.*?;/g,
                                    ""
                                )}
                            />
                        </div>
                        <div className={styles.jobs_title}>
                            <p>{singleEdu?.title}</p>
                        </div>
                        <div className={styles.jobs_content}>
                            <div
                                className={styles.jobs_text}
                                dangerouslySetInnerHTML={{
                                    __html: `${singleEdu?.description}`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className={styles.recent}>
                    <h1 className={styles.jobsListPreview__title}>
                        Другие обучения
                    </h1>

                    <div className={styles.recent_list}>
                        {educationList
                            .filter((el) => el.id !== singleEdu?.id)
                            .map((item, index) => (
                                <SquadCard
                                    title={item.title}
                                    icon={`${process.env.NEXT_PUBLIC_MEDIA}/${item.photo}`}
                                    description={trimText(
                                        item.short_description.replace(
                                            /<.*?>|&.*?;/g,
                                            ""
                                        ),
                                        80,
                                        "..."
                                    )}
                                    key={index}
                                    routerTo="education"
                                    href={item.id}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <Spacer size="xl" />
            <WantJoinBlock />
        </>
    );
}

export async function getServerSideProps({ params }) {
    let currentId = params.id;
    const educationList = await fetchersService
        .getAll("education")
        .then(({ data }) => {
            return data.education_options;
        });

    return {
        props: {
            currentId,
            educationList,
        },
    };
}

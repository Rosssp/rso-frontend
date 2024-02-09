import Image from "next/image";
import { useRouter } from "next/router";
import fetchersService from "../../../services/fetchers.service";
import Spacer from "../../../src/components/UI/spacer/Spacer";
import WantJoinBlock from "../../../src/components/WantJoinBlock/WantJoinBlock";

import styles from "./ParentsHistory.module.scss";
import Head from "next/head";

export default function ParentsHistory({ fullHistory }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Наша История - РСО</title>
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
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Spacer size="md" />
            <Spacer size="xl" />
            <div className={styles.container}>
                <div className={styles.jobs}>
                    <div className={styles.jobs_body}>
                        {fullHistory?.image && (
                            <div className={styles.jobs_image}>
                                <Image
                                    src={
                                        process.env.NEXT_PUBLIC_MEDIA +
                                        "/" +
                                        fullHistory?.image
                                    }
                                    objectFit="cover"
                                    width={500}
                                    height={0}
                                    alt={fullHistory?.title}
                                />
                            </div>
                        )}
                        <div className={styles.jobs_title}>
                            <p>{fullHistory?.title}</p>
                        </div>
                        <div className={styles.jobs_content}>
                            <div
                                className={styles.jobs_text}
                                dangerouslySetInnerHTML={{
                                    __html: `${fullHistory?.text}`,
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
                        {/* {jobs?.map((item, index) => (
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
            ))} */}
                    </div>
                </div>
            </div>
            <Spacer size="xl" />
            <WantJoinBlock title="Хочу принять участие в таких историях" />
        </>
    );
}

export async function getServerSideProps() {
    const fullHistory = await fetchersService
        .getAll("full-history")
        .then(({ data }) => {
            return data;
        });

    return {
        props: {
            fullHistory,
        },
    };
}

import React from "react";

import Head from "next/head";
import Image from "next/image";
import Spacer from "../../../src/components/UI/spacer/Spacer";
import SquadCard from "../../../src/components/UI/cards/squadCard/SquadCard";

import fetchersService from "../../../services/fetchers.service";

import styles from "./index.module.scss";

const SocialProjectDetail = ({ project, allProjects }) => {
    return (
        <>
            <Head>
                <title>{project?.title} - Социальные проекты РСО</title>
                <meta name="webjox" content="monitoring" />
                <meta
                    name="description"
                    content={`Социальный проект ${project.title}`}
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
                <div className={styles.project}>
                    <div className={styles.project_body}>
                        <div className={styles.project_image}>
                            <Image
                                src={
                                    process.env.NEXT_PUBLIC_MEDIA +
                                    "/" +
                                    project?.image
                                }
                                objectFit="cover"
                                width={500}
                                height={0}
                                alt={project?.title}
                            />
                        </div>
                        <div className={styles.project_title}>
                            <h1>{project?.title}</h1>
                        </div>
                        <div className={styles.project_content}>
                            <div
                                className={styles.project_text}
                                dangerouslySetInnerHTML={{
                                    __html: `${project?.text}`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className={styles.recent}>
                    <h2 className={styles.projectsListPreview__title}>
                        Другие социальные проекты
                    </h2>
                    <div className={styles.recent_list}>
                        {allProjects?.map((item, index) => (
                            <SquadCard
                                title={item.title}
                                icon={`${process.env.NEXT_PUBLIC_MEDIA}/${item.icon}`}
                                description={
                                    item.description.slice(0, 150) + "..."
                                }
                                height="fit-content"
                                key={index}
                                routerTo="social-projects"
                                href={item.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Spacer size="xl" />
        </>
    );
};

export default SocialProjectDetail;

export async function getServerSideProps({ params }) {
    const [project, allProjects] = await Promise.all([
        fetchersService.get("social-projects", params.slug).then(({ data }) => {
            return data;
        }),
        fetchersService.getAll("social-projects").then(({ data }) => {
            return data;
        }),
    ]);
    return {
        props: {
            project,
            allProjects,
        },
    };
}

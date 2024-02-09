import Image from "next/image";
import React from "react";
import FindHeadquarters from "../../src/blocks/findHeadquarters/FindHeadquarters";
import images from "../../src/constants/images";
import styles from "./about.module.scss";
import Spacer from "../../src/components/UI/spacer/Spacer";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import fetchersService from "../../services/fetchers.service";
import Head from "next/head";

import { StudentSquadIs } from "../../src/components/About/ui/StudentSquadIs";
import { Achievements } from "../../src/components/About/ui/Achievements";

export default function About({ ourTeam, ourNumbers }) {
    const media900 = useMediaQuery(900);
    const numbersArray = [
        {
            title: ourNumbers?.first_field_number || "Пусто",
            color: "#FFCC25",
            content: ourNumbers?.first_field_text || "Пусто",
        },
        {
            title: ourNumbers?.second_field_number || "Пусто",
            color: "#5477D8",
            content: ourNumbers?.second_field_text || "Пусто",
        },
        {
            title: ourNumbers?.third_field_number || "Пусто",
            color: "#00EFD8",
            content: ourNumbers?.third_field_text || "Пусто",
        },
        {
            title: ourNumbers?.fourth_field_number || "Пусто",
            color: "#FE6871",
            content: ourNumbers?.fourth_field_text || "Пусто",
        },
    ];
    return (
        <>
            <Head>
                <title>О Нас - РСО</title>
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
            <Spacer size="xl" />
            <main className={styles.container}>
                <section className={styles.info}>
                    <div className={styles.info_body}>
                        <h1 className={styles.title}>
                            Студенческие отряды <br /> Самарской области
                        </h1>
                        <div className={styles.imageInText}>
                            <Image
                                src={images.studentSquad}
                                alt="Студенческие отряды Cамарской области"
                                title="Студенческие отряды Cамарской области"
                                width={286}
                                height={309}
                            />
                        </div>
                        <div className={styles.description}>
                            <p>
                                Самарское региональное отделение молодежной
                                общероссийской общественной организация
                                «Российские Студенческие Отряды» (РСО) – одна из
                                крупнейших молодежной организации страны,
                                которая обеспечивает временной трудовой
                                занятостью более 3 тысяч молодых людей из
                                образовательных организаций Самарской области, а
                                также занимается гражданским и патриотическим
                                воспитанием, развивает творческий и спортивный
                                потенциал молодежи.
                            </p>
                            <p>
                                На территории Самарской области штабы
                                студенческих отрядов действуют на базе
                                профессиональных образовательных организаций и
                                образовательных организаций высшего образования
                                Самарской области.
                            </p>
                            <p>
                                Правительством Самарской области на постоянной
                                основе оказывается поддержка студенческим
                                отрядам Самарской области: организационная,
                                финансовая и информационная.
                            </p>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image
                            src={images.studentSquad}
                            alt="Студенческие отряды Cамарской области"
                            title="Студенческие отряды Cамарской области"
                            width={600}
                            height={647}
                        />
                    </div>
                </section>
                <StudentSquadIs />
                <Achievements />
                <div className={styles.numbers}>
                    <div className={styles.numbers_list}>
                        {numbersArray.map((item, index) => (
                            <div className={styles.numbers_card} key={index}>
                                <div
                                    className={styles.numbers_card_title}
                                    style={{ color: item.color }}
                                >
                                    {item.title}
                                </div>
                                <div
                                    className={styles.numbers_card_description}
                                >
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.team}>
                    <h2 className={styles.team_title}>
                        {media900 ? "Наша команда" : "Команда"}
                    </h2>
                    <div className={styles.team_list}>
                        {ourTeam?.our_team?.map((item, index) => (
                            <div className={styles.team_card} key={index}>
                                <div className={styles.team_image}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_MEDIA}/${item.photo}`}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className={styles.team_name}>
                                    {item?.full_name}
                                </div>
                                <div className={styles.team_duty}>
                                    {item?.job_title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Spacer size="sm" />
                <div className={styles.bg__white}>
                    <FindHeadquarters />
                </div>
                <Spacer size="md" />
            </main>
        </>
    );
}

export async function getServerSideProps() {
    const ourTeam = await fetchersService
        .getAll("our-team/")
        .then(({ data }) => {
            return data;
        });

    const ourNumbers = await fetchersService
        .getAll("block-with-numbers")
        .then(({ data }) => {
            return data;
        });

    return {
        props: {
            ourTeam,
            ourNumbers,
        },
    };
}

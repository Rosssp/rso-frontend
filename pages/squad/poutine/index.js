import Image from "next/image";
import Spacer from "../../../src/components/UI/spacer/Spacer";
import images from "../../../src/constants/images";

import styles from "../index.module.scss";
import QuoteBlock from "../../../src/components/QuoteBlock/QuoteBlock";
import Gallery from "../../../src/blocks/gallery/Gallery";
import WantJoinBlock from "../../../src/components/WantJoinBlock/WantJoinBlock";
import fetchersService from "../../../services/fetchers.service";
import Head from "next/head";

import { ListSomeSquadCard } from "../../../src/blocks/ListSomeSquadCard";

export default function poutine({ headquartersServer }) {
    return (
        <>
            <Head>
                <title>Путинные отряды - РСО</title>
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
                <div className={styles.squad}>
                    <div className={styles.squad_header}>
                        <div className={styles.squad_title}>
                            <h2>Путинные отряды</h2>
                        </div>
                    </div>
                    <div className={styles.squad_body}>
                        <div className={styles.squad_image}>
                            <Image src={images.poutineDetail} alt="alt" />
                        </div>
                        <div className={styles.squad_content}>
                            <div className={styles.squad_text}>
                                <p>
                                    Студенческие путинные отряды (СПуО) –
                                    отряды, которые участвуют в полном цикле
                                    переработки рыбы: от погрузки и очистки до
                                    упаковки икры.
                                </p>
                                <QuoteBlock>
                                    <p>
                                        Студенческие путинные отряды зародились
                                        еще далеко в советском союзе. После
                                        развала СССР они возобновили свою работу
                                        в 2000-х годах. Изначально в
                                        студенческих путинных отрядах работали
                                        студенты разных учебных учреждений от
                                        строителей до педагогов. На сегодняшний
                                        день эта традиция сохранилась. Студенты
                                        Камчатки, Сахалина и Владивостока были
                                        первопроходцами этого ремесла. Сейчас
                                        туда приезжают студенты из разных
                                        регионов, в том числе и из Самары.
                                    </p>
                                </QuoteBlock>
                                <p>
                                    За все свое существование на территории
                                    Самарской области студенческие путинные
                                    отряды ежегодно становятся победителями
                                    межрегиональных студенческих путин. С 2020
                                    года победное знамя находится в Самаре, что
                                    доказывает то, что студенческие путинные
                                    отряды - это не просто направление, а целая
                                    большая семья, которая работает на
                                    результат. Тут каждый друг другу брат. Это
                                    направление, где студенты с образовательных
                                    организаций высшего образования и
                                    профессиональных образовательных организаций
                                    трудятся вместе.
                                </p>
                                <br />
                                <p>
                                    В путинных отрядах каждый может найти себе
                                    место. Камчатка, Сахалин, Чукотка - это все
                                    работа в студенческих путинных отрядах. Мы
                                    работаем на различных процессах, начиная от
                                    обработки рыбной и икорной продукции, в
                                    которую входит сортировка по видам.
                                </p>
                                <iframe
                                    src="https://www.youtube.com/embed/pEV3XqAOSyU"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.recent}>
                    <div className={styles.recent_list}>
                        <ListSomeSquadCard />
                    </div>
                </div>
            </div>
            <Spacer size="xl" />
            <Gallery
                imagesGar={[
                    "/images/squad/poutine/1.png",
                    "/images/squad/poutine/2.png",
                    "/images/squad/poutine/3.png",
                    "/images/squad/poutine/4.png",
                ]}
            />
            <Spacer size="xl" />
            <WantJoinBlock
                direction="Путинные отряды"
                headquarters={headquartersServer}
                contacts={{
                    image: "/images/squad/poutine/klyushin_andrey.jpg",
                    name: "Андрей Клюшин",
                    phone: "+7 937 995 04 38",
                    tg_link: "https://t.me/Andrey_Klyushin",
                }}
            />
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

    return {
        props: {
            headquartersServer,
        },
    };
}

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

export default function service({ headquartersServer }) {
    return (
        <>
            <Head>
                <title>Сервисные отряды - РСО</title>
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
                            <h2>Сервисные отряды</h2>
                        </div>
                    </div>
                    <div className={styles.squad_body}>
                        <div className={styles.squad_image}>
                            <Image src={images.serviceDetail} alt="alt" />
                        </div>
                        <div className={styles.squad_content}>
                            <div className={styles.squad_text}>
                                <p>
                                    Студенческие сервисные отряды (ССервО) – это
                                    работа в индустрии гостеприимства.
                                    Приветливо улыбаться, создавать комфортную
                                    атмосферу отдыха, заботиться о людях – все
                                    это и не только часть работы бойца
                                    студенческого сервисного отряда.
                                </p>
                                <br />
                                <p>
                                    Бойцы работают официантами, барменами,
                                    кухонными работниками, спасателями,
                                    горничными, швейцарами, хостес,
                                    озеленителями, роуди, хелперами и по другим
                                    профессиям.
                                </p>
                                <QuoteBlock>
                                    <p>
                                        Студенческие сервисные отряды
                                        обслуживают гостей в гостиничном и
                                        ресторанном бизнесе, в сфере
                                        общественного питания, отдыха и
                                        развлечений, во время проведения
                                        конференций, семинаров, выставок,
                                        крупнейших всероссийских и международных
                                        соревнований, а также работают в детских
                                        оздоровительных лагерях.
                                    </p>
                                </QuoteBlock>
                                <p>
                                    Современные студенческие отряды имеют
                                    большой опыт работы и положительную
                                    репутацию в индустрии гостеприимства.
                                </p>
                                <iframe
                                    src="https://vk.com/video_ext.php?oid=-353000&id=456239931&hash=4c83f7c8011c0dcd&hd=2"
                                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                                    frameborder="0"
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
                    "/images/squad/service/1.png",
                    "/images/squad/service/2.png",
                    "/images/squad/service/3.png",
                    "/images/squad/service/4.png",
                ]}
            />
            <Spacer size="xl" />
            <WantJoinBlock
                direction="Сервисные отряды"
                headquarters={headquartersServer}
                contacts={{
                    image: "/images/squad/agricultural/ozerov_aleksey.jpg",
                    name: "Алексей Озеров",
                    phone: "+7 977 499 36 65",
                    tg_link: "https://t.me/REPIMBOLUS",
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

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

export default function agricultural({ headquartersServer }) {
    return (
        <>
            <Head>
                <title>Сельскохозяйственные отряды - РСО</title>
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
                            <h2>Сельскохозяйственные отряды</h2>
                        </div>
                    </div>

                    <div className={styles.squad_body}>
                        <div className={styles.squad_image}>
                            <Image src={images.agriculturalDetail} alt="alt" />
                        </div>

                        <div className={styles.squad_content}>
                            <div className={styles.squad_text}>
                                <p>
                                    Студенческие сельскохозяйственные отряды
                                    (ССхО) – отряды, которые привлекаются к
                                    посевным и уборочным работам сезонного
                                    урожая; работают на животноводческих
                                    комплексах ветеринарами и зоотехниками.
                                </p>
                                <br />
                                <p>
                                    <b>
                                        Первые студенческие сельскохозяйственные
                                        отряды появились в 70-х годах XX века –
                                        это были отряды механизаторов на селе и
                                        путинные отряды
                                    </b>{" "}
                                    (путинные отряды участвуют в полном цикле
                                    переработки рыбы: от погрузки и очистки до
                                    упаковки икры и сейчас выделяются в
                                    отдельное направление).
                                </p>
                                <QuoteBlock>
                                    <p>
                                        Впервые в 1978 году студенты стали
                                        трудиться на полях колхозов и совхозов
                                        во время осенних уборочных работ в
                                        составе отрядов, сформированных по
                                        принципу ССО. Уже через 2 года, в 1980
                                        году, в осенних сельскохозяйственных
                                        уборочных работах в составе 20,9 тысячи
                                        отрядов приняли участие свыше 1,4
                                        миллиона студентов и учащихся страны. В
                                        XXI веке бойцы РСО продолжают эту
                                        традицию.
                                    </p>
                                </QuoteBlock>
                                <p>
                                    Студенты работают на уборке урожая
                                    плодово-ягодных культур, занимаются
                                    озеленением территории. В составе отрядов
                                    комбайнеров-механизаторов студенты
                                    вспахивают и засевают поля, убирают
                                    сельскохозяйственную продукцию.
                                </p>
                                <br />
                                <p>
                                    Кроме работы на посеве и сборе урожая,
                                    отряды принимают участие в важных
                                    сельскохозяйственных кампаниях: занимаются
                                    уходом за сельскохозяйственными животными и
                                    помогают в проведении зооветеринарных
                                    мероприятий, работают операторами машинного
                                    доения, помощниками ветврачей и зоотехников.
                                    Для студентов профильных вузов это отличная
                                    возможность пройти летнюю практику в
                                    студотрядовской атмосфере.
                                </p>
                                <br />
                                <p>
                                    Проведение подобных мероприятий способствует
                                    воспитанию среди молодежи любви к своей
                                    Малой Родине, уважительному отношению к
                                    сельским труженикам.
                                </p>
                                <br />
                                <p>
                                    Студенческие сельскохозяйственные отряды
                                    Самарской области ежегодно выезжают на
                                    трудовой проект{" "}
                                    <b>
                                        Всероссийский студенческий
                                        сельскохозяйственный отряд «МОСТ»
                                        (Молочный стандарт)
                                    </b>
                                    . Место дислокации проекта – ООО «ЭКО-Нива
                                    АПК» в Воронежской области. Компания
                                    организует свою работу по принципу «от поля
                                    до прилавка». Именно по этой причине бойцы
                                    отряда работают не только помощниками
                                    ветеринаров и зоотехников, но и помощниками
                                    механизаторов, агрономов, экономистов и
                                    технологов перерабатывающей продукции.
                                </p>
                                <br />
                                <p>
                                    Также наши студенты отправляются на летние
                                    трудовые проекты по сбору сезонного урожая
                                    яблок, персиков и других плодово-ягодных
                                    культур на трудовые проекты по всей России.
                                </p>
                                <iframe
                                    src="https://vk.com/video_ext.php?oid=-353000&id=456239932&hash=00d50e13b626de0e&hd=2"
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
                    "/images/squad/agricultural/1.png",
                    "/images/squad/agricultural/2.png",
                    "/images/squad/agricultural/3.png",
                    "/images/squad/agricultural/4.png",
                ]}
            />
            <Spacer size="xl" />
            <WantJoinBlock
                direction="Сельскохозяйственные отряды"
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

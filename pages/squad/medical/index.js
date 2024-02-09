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

export default function medicalPage({ headquartersServer }) {
    return (
        <>
            <Head>
                <title>Медицинские отряды - РСО</title>
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
                            <h2>Медицинские отряды</h2>
                        </div>
                    </div>

                    <div className={styles.squad_body}>
                        <div className={styles.squad_image}>
                            <Image src={images.medicalDetail} alt="alt" />
                        </div>

                        <div className={styles.squad_content}>
                            <div className={styles.squad_text}>
                                <p>
                                    Студенческие медицинские отряды (СМО) - это
                                    динамично развивающее направление.
                                </p>
                                <QuoteBlock>
                                    <p>
                                        Во время отпускного периода младшего и
                                        среднего медицинского персонала и
                                        повышения сезонной нагрузки на
                                        медицинские учреждения курортных
                                        городов, студенческие медицинские отряды
                                        стали реальным подспорьем практическому
                                        здравоохранению.
                                    </p>
                                </QuoteBlock>
                                <p>
                                    Студенческие медицинские отряды приобретают
                                    большую значимость в становлении будущего
                                    специалиста, формируя не только
                                    профессиональные компетенции, но и
                                    воспитывая в нем упорство, трудолюбие,
                                    любовь к профессии, умение созидать, быть
                                    полезным обществу и конечно социально
                                    активным гражданином своей страны.
                                </p>
                                <br />
                                <p>
                                    <b>
                                        Студенческие медицинские отряды
                                        позволяют при помощи наставничества
                                        опытных врачей сформировать
                                        профессиональные компетенции,
                                    </b>
                                    основанные на органичном единстве
                                    фундаментальных знаний, владении
                                    практическими навыками и четком понимании
                                    будущих профессиональных задач, опыте работы
                                    в профессиональном обществе, активном
                                    контакте молодежи с потенциальными
                                    работодателями и их дальнейшее
                                    трудоустройство в первичное звено системы
                                    здравоохранения Российской Федерации.
                                </p>
                                <iframe
                                    src="https://vk.com/video_ext.php?oid=-353000&id=456239928&hash=7e42c1130e51a1bc&hd=2"
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
                    "/images/squad/medical/1.png",
                    "/images/squad/medical/2.png",
                    "/images/squad/medical/3.png",
                    "/images/squad/medical/4.png",
                ]}
            />
            <Spacer size="xl" />
            <WantJoinBlock
                direction="Медицинские отряды"
                headquarters={headquartersServer}
                contacts={{
                    image: "",
                    name: "Иван Заикин",
                    phone: "+7 987 501 5845",
                    tg_link: "https://t.me/Zaikin_Ivan",
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

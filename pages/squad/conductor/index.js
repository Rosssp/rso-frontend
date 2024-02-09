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

export default function conductor({ headquartersServer }) {
    return (
        <>
            <Head>
                <title>Отряды проводников - РСО</title>
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
                            <h2>Отряды проводников</h2>
                        </div>
                    </div>
                    <div className={styles.squad_body}>
                        <div className={styles.squad_image}>
                            <Image src={images.railDetail} alt="alt" />
                        </div>
                        <div className={styles.squad_content}>
                            <div className={styles.squad_text}>
                                <p>
                                    Студенческие отряды проводников (СОП) –
                                    работают проводниками пассажирских вагонов
                                    на железной дороге.
                                </p>
                                <br />
                                <p>
                                    <b>
                                        Это направление для тех, кто очень любит
                                        путешествия. Постоянная смена пейзажей
                                        за окном, общение с самыми разными
                                        людьми – настоящая романтика железной
                                        дороги.
                                    </b>
                                </p>
                                <br />
                                <p>
                                    Студенческие отряды проводников представляют
                                    самый многочисленный отряд Самарской
                                    области, который называется ССОП «Жигули».
                                </p>
                                <QuoteBlock>
                                    <p>
                                        Работают в структурных подразделениях АО
                                        «Федеральной Пассажирской Компании» и АО
                                        ТК«Гранд Сервис Экспресс», обеспечивают
                                        пассажирские перевозки по направлениям:
                                        Москва, Адлер, Анапа, Симферополь,
                                        Сухум, Санкт-Петербург, Новый Уренгой,
                                        Нижневартовск, Новороссийск, Владивосток
                                        и другие. Работают на летних и зимних
                                        перевозках.
                                    </p>
                                    <br />
                                    <p>
                                        Помимо работы проводниками пассажирских
                                        вагонов, студенческие отряды проводников
                                        трудятся в составе отрядов кондукторов в
                                        МП г.о. Самара «Трамвайно-Троллейбусное
                                        управление», ООО «СамараАвтоГаз», а так
                                        же, могут работать официантами
                                        вагона-ресторана в компании
                                        «Напитки-Транс-Сервис».
                                    </p>
                                    <br />
                                </QuoteBlock>
                                <p>
                                    Каждый член отряда проводников бесплатно
                                    получает профессию «Проводник пассажирского
                                    вагона» и проходит специализированную
                                    медицинскую комиссию перед работой.
                                </p>
                                <br />
                                <p>
                                    <b>
                                        На протяжении 5 лет бойцы нашего отряда
                                        входят в 10-ку лучших проводников
                                        Всероссийского конкурса
                                        профессионального мастерства
                                        студенческих отрядов проводников.
                                    </b>
                                    По итогам летних пассажирских перевозок 2022
                                    г. боец нашего отряда вошел в 5-ку лучших
                                    проводников среди студентов России по
                                    откатанным часам.
                                </p>
                                <br />
                                <p>
                                    <b>
                                        Проводники пассажирских вагонов –
                                        пожалуй, самое романтичное и в то же
                                        время по-своему экстремальное
                                        направление деятельности студенческих
                                        отрядов.
                                    </b>{" "}
                                    Ребята, работающие проводниками все лето,
                                    привозят домой кучу эмоций и впечатлений,
                                    которые заряжают их на весь год, они могут
                                    рассказать массу интересных историй,
                                    произошедших с ними в рейсах и похвастаться
                                    множеством друзей по всей стране.
                                </p>
                                <br />
                                <p>
                                    Каждая поездка не похожа на предыдущую:
                                    новые пассажиры, новые километры, новые
                                    города. Но романтика дорог далеко не
                                    главное, что встречается в жизни ребят,
                                    работа вдали от дома – это настоящая школа
                                    жизни, которая каждому позволит проверить
                                    товарища на верность, научиться принимать
                                    решения в непростых ситуациях, получить опыт
                                    общения с людьми, и, конечно же,
                                    самостоятельно заработать деньги.
                                </p>
                                <iframe
                                    src="https://vk.com/video_ext.php?oid=-353000&id=456239927&hash=b36b43437e5d6c21&hd=2"
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
                    "/images/squad/rail/1.png",
                    "/images/squad/rail/2.png",
                    "/images/squad/rail/3.png",
                    "/images/squad/rail/4.png",
                ]}
            />
            <Spacer size="xl" />
            <WantJoinBlock
                direction="Отряды проводников"
                headquarters={headquartersServer}
                contacts={{
                    image: "/images/squad/rail/olga_burlakova.jpg",
                    name: "Ольга Бурлакова",
                    phone: "+7 927 761 1761",
                    tg_link: "https://t.me/olka_burlakova",
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

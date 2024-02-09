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

export default function construction({ headquartersServer }) {
    return (
        <>
            <Head>
                <title>Строительные отряды - РСО</title>
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
                            <h2>Строительные отряды</h2>
                        </div>
                    </div>

                    <div className={styles.squad_body}>
                        <div className={styles.squad_image}>
                            <Image src={images.buildDetail} alt="alt" />
                        </div>

                        <div className={styles.squad_content}>
                            <div className={styles.squad_text}>
                                <p>
                                    Студенческие строительные отряды – это
                                    работа на различных строительных объектах
                                    нашей страны как регионального,
                                    всероссийского, так и международного
                                    масштаба.
                                </p>
                                <QuoteBlock>
                                    <p>
                                        Студенческие строительные отряды
                                        Самарской области ежегодно трудятся на
                                        объектах Госкорпорации «Росатом»: на
                                        объектах Курской, Томской, Ленинградской
                                        АЭС, Производственное объединение «Маяк»
                                        (АЭС расположенная в ЗАТО Озерск).
                                        Бойцам студенческих отрядов доверяют
                                        строительство объектов олимпийского
                                        значения, универсиады в Казани,
                                        космодромов «Восточный» и «Плесецк»,
                                        объектов к Чемпионату по футболу,
                                        Бованенковского нефтегазоконденсатного
                                        месторождения, а также многих других
                                        объектов всероссийского значения. В
                                        рамках международного обмена командир
                                        студенческого строительного отряда
                                        «Кобра», прошла отбор и приняла участие
                                        в Международном проекте по строительству
                                        АЭС в Египте.
                                    </p>
                                </QuoteBlock>

                                <p>
                                    <b>Нашими ключевыми партнерами являются:</b>
                                </p>
                                <br />
                                <p>
                                    <b>ООО «Нова»</b> - одна из крупнейших в
                                    России компаний, специализирующихся на
                                    строительстве магистральных трубопроводов и
                                    объектов обустройства нефтяных и газовых
                                    месторождений. Студенческие отряды в летние
                                    сезоны работают на производственных участках
                                    в разных регионах России. Работа в компании
                                    это не только участие в строительстве
                                    масштабных объектов, но и возможность
                                    построить свою карьеру на предприятии в
                                    будущем. И такие примеры уже есть!
                                </p>
                                <br />
                                <p>
                                    <b>
                                        Куйбышевская дирекция по ремонту пути –
                                        филиала ОАО «РЖД»
                                    </b>{" "}
                                    - основной задачей которой является
                                    организация всех видов ремонта и
                                    реконструкции железнодорожного пути,
                                    сооружений и земляного полотна в объемах,
                                    необходимых для безопасного пропуска поездов
                                    с установленными скоростями. Работа в
                                    студенчестве в данной компании, дает большой
                                    спектр возможностей и преимуществ для тех,
                                    кто придёт в дирекцию после окончания своего
                                    обучения.
                                </p>
                                <br />
                                <p>
                                    <b>
                                        В составе отрядов студенты работают по
                                        следующим специальностям:
                                    </b>{" "}
                                    плотник, сварщик, каменщик, стропальщик,
                                    монтажник, арматурщик, кровельщик, дорожный
                                    рабочий, штукатур-маляр и др. Для этого
                                    региональным штабом организуется бесплатное
                                    обучение по одной из вышеуказанных
                                    специальностей, на базе профильных учебных
                                    заведений.
                                </p>
                                <iframe
                                    src="https://vk.com/video_ext.php?oid=-353000&id=456239929&hash=bab569a5f1ce321d&hd=2"
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
                    "/images/squad/build/1.png",
                    "/images/squad/build/2.png",
                    "/images/squad/build/3.png",
                    "/images/squad/build/4.png",
                ]}
            />
            <Spacer size="xl" />
            <WantJoinBlock
                direction="Строительные отряды"
                headquarters={headquartersServer}
                contacts={{
                    image: "",
                    name: "Алексей Новоселов",
                    phone: "+7 999 158 1670",
                    tg_link: "https://t.me/novoselov_ai",
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

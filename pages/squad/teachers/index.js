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

export default function teachers({ headquartersServer }) {
    return (
        <>
            <Head>
                <title>Педагогические отряды - РСО</title>
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
                            <h2>Студенческие педагогические отряды</h2>
                        </div>
                    </div>
                    <div className={styles.squad_body}>
                        <div className={styles.squad_image}>
                            <Image src={images.teachersDetail} alt="alt" />
                        </div>

                        <div className={styles.squad_content}>
                            <div className={styles.squad_text}>
                                <p>
                                    Студенческие педагогические отряды (СПО)
                                    ежегодно работают вожатыми и организовывают
                                    каникулярный отдых детей в детских лагерях.
                                </p>
                                <br />
                                <p>
                                    Большая часть вожатых летом
                                    трудоустраивается на территории Самарской
                                    области: МАУ санаторий «Молодецкий курган» ,
                                    СП ДОЦ «Жигулевский Артек», ДОЛ «Волжский
                                    Артек» , ДОЦ "Лесной", МЦ "Лесная сказка",
                                    Санаторий "Колос", ДОЛ "Юный строитель",
                                    ДЗСОЛ "Дружба", ОСП б/о "Спартак".
                                </p>
                                <br />
                                <p>
                                    Также, мы сотрудничаем с работодателями
                                    Краснодарского края: ДОЛ «Шахтинский
                                    Текстильщик», всероссийский трудовой проект
                                    «Дельфин.RU».
                                </p>
                                <br />
                                <p>
                                    С февраля по май студенты осваивают
                                    бесплатную профессиональную подготовку в
                                    школе вожатых, где получают знания и навыки,
                                    необходимые для дальнейшей работы вожатыми.
                                </p>
                                <QuoteBlock>
                                    <p>
                                        В настоящее время студенческие
                                        педагогические отряды являются самым
                                        популярным и дружным направлением
                                        Самарского регионального отделения
                                        Российских Студенческих Отрядов, в
                                        котором проводятся ежегодные
                                        традиционные мероприятия.
                                    </p>
                                    <br />
                                    <p>
                                        На адаптационном выезде «Коммунары», для
                                        новичков педагогического направления,
                                        студенты за несколько дней проживания в
                                        детском лагере в игровом формате
                                        проходят все этапы смены, получают
                                        практические навыки.
                                    </p>
                                    <br />
                                    <p>
                                        Осенью отряды вожатых показывают свои
                                        профессиональные качества на
                                        региональном конкурсе «Лучший
                                        студенческий педагогический отряд
                                        Самарской области» . Конкурс состоит из
                                        заочного и очного этапов. Лучший отряд
                                        получает знамя, а также памятные призы с
                                        символикой конкурса.
                                    </p>
                                    <br />
                                </QuoteBlock>
                                <p>
                                    Современные студенческие педагогические
                                    отряды составляют основной кадровый
                                    потенциал в сфере детского отдыха и
                                    оздоровления. Постановка концертов,
                                    планерки, мероприятия и много детской
                                    энергии. Для каждого вожатого работа с
                                    детьми - дело всей жизни, которому он готов
                                    посвящать всего себя. А взамен получать
                                    искренний смех, улыбки и любовь. Вожатый -
                                    это призвание!
                                </p>
                                <iframe
                                    src="https://vk.com/video_ext.php?oid=-353000&id=456239930&hash=66be64cd008f7cfd&hd=2"
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
                    "/images/squad/teachers/1.png",
                    "/images/squad/teachers/2.png",
                    "/images/squad/teachers/3.png",
                    "/images/squad/teachers/4.png",
                ]}
            />
            <Spacer size="xl" />
            <WantJoinBlock
                direction="Педагогические отряды"
                headquarters={headquartersServer}
                contacts={{
                    image: "/images/squad/teachers/truhanova_anna.jpg",
                    name: "Анна Труханова",
                    phone: "+7 927 717 88 94",
                    tg_link: "https://t.me/Anna_Yurevna_T",
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

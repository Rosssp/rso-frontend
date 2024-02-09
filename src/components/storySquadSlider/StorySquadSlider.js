import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import SquadCard from "../UI/cards/squadCard/SquadCard";
import Spacer from "../UI/spacer/Spacer";
import images from "../../constants/images";
import DefaultButton from "../UI/button/DefaultButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import styles from "./storySquadSlider.module.scss";

export default function StorySquadSlider() {
    const desc1140 = useMediaQuery(1140);
    const mob870 = useMediaQuery(870);

    const item = [
        {
            img: images.parent1,
            text: "В 1965 году началось создание студенческих отрядов Куйбышевской области, которые выехали в Казахстан. Порядка 500 человек. Это был первый организованный сводный отряд нескольких вузов, который работал в Уральской области. Пару лет спустя был образован областной отряд студотрядов, которые работали на так называемой «малой целине» на объектах Куйбышевской области.",
        },
        {
            img: images.parent2,
            text: "В 2008 году образовано Самарское движение «Российские Студенческие Отряды», которое объединило первые созданные линейные штабы студотрядов в образовательных организациях Высшего образования. В этом же году был организован первый слет студенческих отрядов Самарской области, коммунарские сборы, региональная школа командных составов, презентационные площадки, субботники и демонстрации студенческих отрядов.",
        },
        {
            img: images.parent3,
            text: "В 2023 году штабы студенческих отрядов действуют на базе профессиональных образовательных организаций и образовательных организаций высшего образования Самарской области. Новый вектор, импульс в развитии движение получило благодаря подписанному 30 июня 2021 года Губернатором Самарской области Д.И. Азаровым закону, который направлен на всестороннее развитие деятельности студенческих отрядов в Самарской области. Кроме того, удалось создать мультиформатное пространство студенческих отрядов.",
        },
    ];
    return (
        <div className={styles.sqs__wrapper}>
            <p className={styles.sqs__title}>От Куйбышева до Самары</p>
            <Spacer size="sm" />
            <div className={styles.sqs__bages}>
                <div className={styles.sqs__bages_item}>1965</div>
                <div className={styles.sqs__bages_item_line}></div>
                <div className={styles.sqs__bages_item}>2008</div>
                <div className={styles.sqs__bages_item_line}></div>
                <div className={styles.sqs__bages_item}>2023</div>
            </div>
            <Spacer size="sm" />
            <>
                {desc1140 ? (
                    <>
                        <Swiper
                            slidesPerView={mob870 ? 1 : 2}
                            spaceBetween={40}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".prev",
                                lockClass: "disabled",
                            }}
                            modules={[Navigation, Pagination]}
                            pagination={{
                                clickable: true,
                                el: ".dots",
                            }}
                            loop={true}
                            className={styles.sqs_swiper__wrapper}
                        >
                            {item.map((item) => (
                                <SwiperSlide
                                    style={{
                                        alignItems: "center",
                                        justifyContent: " center",
                                        display: "flex",
                                    }}
                                >
                                    <SquadCard
                                        description={
                                            mob870
                                                ? item.text.slice(0, 132) +
                                                  "..."
                                                : item.text
                                        }
                                        icon={item.img}
                                        width={mob870 ? 280 : 340}
                                        height={mob870 ? 392 : 727}
                                        widthImg={320}
                                        heightImg={220}
                                        type="slider"
                                        typeTextAlignLeft="textAlignLeft"
                                        paddingBody={true}
                                        nolink
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={"dots"}></div>
                    </>
                ) : (
                    <div className={styles.sqs__cards}>
                        {item.map((item) => (
                            <>
                                <SquadCard
                                    description={item.text}
                                    icon={item.img}
                                    height={726}
                                    width={340}
                                    widthImg={320}
                                    heightImg={220}
                                    type="slider"
                                    typeTextAlignLeft="textAlignLeft"
                                    paddingBody={true}
                                    nolink
                                />
                            </>
                        ))}
                    </div>
                )}
            </>
            <Spacer size="md" />
            <div className={styles.sqs__button}>
                <DefaultButton type="blue" hrefLink={"/parents/history"}>
                    Читать историю полностью
                </DefaultButton>
            </div>
        </div>
    );
}

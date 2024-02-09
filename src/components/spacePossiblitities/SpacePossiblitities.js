import React from "react";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import CustomModal from "../modal/Modal";
import PossiblititiesImages from "../possiblititiesImages/PossiblititiesImages";
import DefaultButton from "../UI/button/DefaultButton";
import Spacer from "../UI/spacer/Spacer";
import styles from "./SpacePossiblitities.module.scss";
import DefaultForm from "../DefaultForm/DefaultForm";

export default function SpacePossiblitities() {
    const tempItems = [
        {
            text: "С 2021 года у студенческих отрядов Самарской области есть современная мультиформатное пространство, которое было открыто в целях исполнения положений Закона Самарской области «О государственной поддержке студенческих отрядов в Самарской области», подписанного 30 июня 2021 года Губернатором Самарской области Д.И.Азаровым. <br/><br/>Помимо рабочих кабинетов командира и сотрудников регионального отделения, площадка включает в себя:",
            titleFirst: "Музейное пространство",
            subTextFirst:
                "Выставочный зал с интерактивными стендами для презентации основных направлений деятельности студенческих отрядов, а также проведения тренингов, лекций, обучающих семинаров на аудиторию до 35 человек.",
            titleSecond: "Коворкинг",
            subTextSecond:
                "Разделённый на комфортные рабочие зоны с доступом к сети Интернет, оборудованные мягкой мебелью, оргтехникой, а также офисными принадлежностями.",
        },
    ];
    // const imgs = [
    //     { img: images.third },
    //     { img: images.four },
    //     { img: images.first },
    //     { img: images.second },
    // ];

    const imgs = [
        { img: images.space1 },
        { img: images.space2 },
        { img: images.space3 },
        { img: images.space4 },
    ];

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const mobile = useMediaQuery(968);
    return (
        <>
            <div
                style={{
                    backgroundColor: "#5477D8",
                }}
            >
                <Spacer size="sm" />

                {mobile ? (
                    <div className={styles.sp__container}>
                        <div className={styles.sp__title}>
                            Пространство твоих возможностей
                        </div>
                        <div className={styles.images__container}>
                            <PossiblititiesImages type="poss" img={imgs} />
                        </div>
                        {tempItems.map((item) => (
                            <div className={styles.sp__descr__container}>
                                <div
                                    className={styles.sp__main_text}
                                    dangerouslySetInnerHTML={{
                                        __html: `${item.text} `,
                                    }}
                                ></div>
                                <Spacer size="sm" />
                                <div className={styles.sp_sub__container}>
                                    <div className={styles.sp_sub__side}>
                                        <div className={styles.sp_sub__title}>
                                            {item.titleFirst}
                                        </div>
                                        <div className={styles.sp_sub__text}>
                                            {item.subTextFirst}
                                        </div>
                                    </div>
                                    <div className={styles.sp_sub__side}>
                                        <div className={styles.sp_sub__title}>
                                            {item.titleSecond}
                                        </div>
                                        <div className={styles.sp_sub__text}>
                                            {item.subTextSecond}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className={styles.sp__text}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <DefaultButton type="default" isTargetBlank hrefLink={'https://vk.com/rsosamara?w=wall-10616834_9824'}>
                                    Хочу в нем поработать
                                </DefaultButton>
                            </div>
                            <Spacer size="lg" />
                        </div>
                    </div>
                ) : (
                    <div className={styles.sp__container}>
                        <div className={styles.images__container}>
                            <PossiblititiesImages type="poss" img={imgs} />
                        </div>
                        <div className={styles.sp__text}>
                            <div className={styles.sp__title}>
                                Пространство твоих возможностей
                            </div>
                            {tempItems.map((item) => (
                                <div className={styles.sp__descr__container}>
                                    <div
                                        className={styles.sp__main_text}
                                        dangerouslySetInnerHTML={{
                                            __html: `${item.text} `,
                                        }}
                                    ></div>
                                    <Spacer size="sm" />
                                    <div className={styles.sp_sub__container}>
                                        <div className={styles.sp_sub__side}>
                                            <div
                                                className={styles.sp_sub__title}
                                            >
                                                {item.titleFirst}
                                            </div>
                                            <div
                                                className={styles.sp_sub__text}
                                            >
                                                {item.subTextFirst}
                                            </div>
                                        </div>
                                        <div className={styles.sp_sub__side}>
                                            <div
                                                className={styles.sp_sub__title}
                                            >
                                                {item.titleSecond}
                                            </div>
                                            <div
                                                className={styles.sp_sub__text}
                                            >
                                                {item.subTextSecond}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Spacer size="md" />

                            <div>
                                <DefaultButton type="default" isTargetBlank hrefLink={'https://vk.com/rsosamara?w=wall-10616834_9824'}>
                                    Хочу в нем поработать
                                </DefaultButton>
                            </div>
                            <Spacer size="lg" />
                        </div>
                    </div>
                )}
            </div>

            <CustomModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <DefaultForm type="work" />
            </CustomModal>
        </>
    );
}

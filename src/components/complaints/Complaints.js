import Image from "next/image";
import React from "react";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import LazyIframe from "../LazyYouTube/LazyYouTube";
import styles from "./complaints.module.scss";

export default function Complaints() {
    const desk1024 = useMediaQuery(1024);
    const text = [
        {
            descr: "С 1 июня 2018 года для представителей РСО заработал Всероссийский информационно-консультативный центр студенческих отрядов. <br/>  <br/> Теперь каждый боец сможет круглосуточно, 7 дней в неделю получать ответы на интересующие вопросы.",
        },
    ];
    return (
        <div className={styles.complaints__container}>
            {desk1024 ? (
                <>
                    <div className={styles.complaints_title}>
                        Есть жалобы или вопросы?
                    </div>
                    <div className={styles.complaints__video}>
                        <LazyIframe
                            title={"YouTube video player"}
                            embedId={"THKogx1wndI"}
                        />
                    </div>
                    <div className={styles.complaints__text__container}>
                        {text.map((item) => (
                            <div
                                className={styles.complaints_descr}
                                dangerouslySetInnerHTML={{ __html: item.descr }}
                            ></div>
                        ))}
                        <div className={styles.complaints_phone__container}>

                                <a className={styles.vk} target="_blank" href="https://vk.com/ikc_rso">
                                    <Image src={images.vkBlue} />
                                </a>
                                <div className={styles.complaints_phone_title}>
                                    Телефон горячей линии
                                </div>
                                <a className={styles.complaints_phone} href="tel:+78007700117">
                                    8 800 770 0 117
                                </a>

                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.complaints__video}>
                        <LazyIframe
                            title={"YouTube video player"}
                            embedId={"THKogx1wndI"}
                        />
                    </div>
                    <div className={styles.complaints__text__container}>
                        <div className={styles.complaints_title}>
                            Есть жалобы или вопросы?
                        </div>
                        {text.map((item) => (
                            <div
                                className={styles.complaints_descr}
                                dangerouslySetInnerHTML={{ __html: item.descr }}
                            ></div>
                        ))}
                        <div className={styles.complaints_phone__container}>
                            <div>
                                <div className={styles.complaints_phone_title}>
                                    Телефон горячей линии
                                </div>
                                <a className={styles.complaints_phone} href="tel:+78007700117">
                                    8 800 770 0 117
                                </a>
                            </div>
                            <a className={styles.vk} target="_blank" href="https://vk.com/ikc_rso">
                                <Image src={images.vkBlue} />
                            </a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

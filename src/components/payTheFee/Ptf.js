import Image from "next/image";
import React from "react";
import DefaultButton from "../../components/UI/button/DefaultButton";
import styles from "./ptf.module.scss";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useRouter } from "next/router";

export default function Ptf() {
    const router = useRouter();
    const handleClickPay = (e) => {
        e.preventDefault();
        router.push("/payment");
    };
    const handleClickDoc = (e) => {
        e.preventDefault();
        router.push("/documents");
    };
    const mobile = useMediaQuery(768);
    return (
        <>
            {mobile ? (
                <div
                    className={styles.ptf__container}
                    style={{ backgroundColor: "#5477d8" }}
                >
                    <div className={styles.ptf__buttons}>
                        <DefaultButton
                            type="ptfButtonWhite"
                            icon={images.doc}
                            onClick={handleClickDoc}
                            hrefLink={'/documents'}
                        >
                            Документы
                        </DefaultButton>
                        <DefaultButton
                            type="ptfDefWhite"
                            icon={images.wallet}
                            onClick={handleClickPay}
                            hrefLink={'/payment'}
                        >
                            Оплатить взнос
                        </DefaultButton>
                    </div>
                    <div className={styles.ptf__image}>
                        <Image src={images.girl} />
                    </div>
                </div>
            ) : (
                <div className={styles.ptf__container}>
                    <div className={styles.ptf__image}>
                        <Image src={images.girl} />
                    </div>
                    <div className={styles.ptf__buttons}>
                        <div className={styles.ptf__wrapper}>
                            {/* <Image src={images.leftLine} /> */}
                            <div className={styles.ptf_tutorial}>
                                <div className={styles.ptf_tutorial_left}>
                                    Скачай актуальные документы, будь в курсе
                                    событий
                                </div>
                                <div className={styles.ptf_tutorial_right}>
                                    Начни профессиональный рост и жизнь, полную
                                    путешествий, востребованных обучений и
                                    верных
                                    <span> друзей</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ptf_button}>
                            <DefaultButton
                                type="white"
                                icon={images.doc}
                                onClick={handleClickDoc}
                                hrefLink={'/documents'}
                            >
                                Документы
                            </DefaultButton>
                        </div>
                        <div className={styles.ptf_button_second}>
                            <DefaultButton
                                type="default"
                                icon={images.wallet}
                                onClick={handleClickPay}
                                hrefLink={'/payment'}
                            >
                                Оплатить взнос
                            </DefaultButton>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

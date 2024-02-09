import Head from "next/head";
import Image from "next/image";
import React from "react";
import Spacer from "../../src/components/UI/spacer/Spacer";
import images from "../../src/constants/images";
import useMediaQuery from "../../src/hooks/useMediaQuery";

import styles from "./Payment.module.scss";

export default function Payment() {
    const mob480 = useMediaQuery(480);
    const mob768 = useMediaQuery(768);

    return (
        <>
            <Head>
                <title>Оплата Взноса</title>
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
            <div className={styles.payment}>
                <Spacer size="lg" />
                <div className={styles.qr}>
                    <div className={styles.qr__title}>
                        Оплата ежегодных взносов
                    </div>
                    <div className={styles.qr__description}>
                        Сканируй QR-код и быстро оплачивай взнос, не выходя из
                        дома
                    </div>
                    <div className={styles.qr__image}>
                        <Image src={images.qrCode} />
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.info__title}>Как это сделать:</div>
                    <ul className={styles.info__ul}>
                        <li className={styles.info__li}>
                            Откройте на мобильном устройстве любое приложение
                            для считывания QR-код (чаще всего достаточно просто
                            камеры)
                        </li>
                        <li className={styles.info__li}>
                            2. По ссылке кода вам откроется страница оплаты в
                            мобильном приложении банка. В платеже сразу будет
                            указаны реквизиты получателя и сумма взноса
                        </li>
                        <li className={styles.info__li}>
                            3. Нажимайте кнопку «Оплатить»
                        </li>
                        <li className={styles.info__li}>
                            4. Если возникли трудности с оплатой - обратитесь в
                            свой банк. Если проблемы возникли на стороне сайта,
                            то обратитесь по номеру телефона -{" "}
                            <a href="tel:+78462026082">8 (846) 202 60 82</a>.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

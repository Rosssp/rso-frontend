import React, { useState } from "react";
import Image from "next/image";
import styles from "./FaqLayout.module.scss";

import DefaultButton from "../../components/UI/button/DefaultButton";
import Accrodion from "../../components/UI/accordion/Accrodion";
import images from "../../constants/images";
import Spacer from "../../components/UI/spacer/Spacer";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useRouter } from "next/router";

const FaqLayout = ({ documentsBtn, type, faq, slice = true }) => {
    const router = useRouter();
    const mob900 = useMediaQuery(900);
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={`${styles.wrapper} ${styles[type]}`}>
                <h2 className={styles.title}>Популярные вопросы</h2>

                <div className={styles.body}>
                    <div className={styles.side}>
                        <div className={styles.question}>
                            {faq.map((item) => (
                                <>
                                    {slice === true ? (
                                        <>
                                            {item.display_on_faq === true && (
                                                <Accrodion
                                                    title={item.name}
                                                    content={item.question}
                                                />
                                            )}
                                        </>
                                    ) : (
                                        <Accrodion
                                            title={item.name}
                                            content={item.question}
                                        />
                                    )}
                                </>
                            ))}
                        </div>

                        <div className={styles.control}>
                            {slice === true ? (
                                <DefaultButton
                                    type={`outline_white`}
                                    onClick={() => router.push("/faq")}
                                    hrefLink={"/faq"}
                                >
                                    Все вопросы
                                </DefaultButton>
                            ) : (
                                <>
                                    {mob900 && (
                                        <DefaultButton
                                            type={`outline_blueFaq`}
                                            onClick={() =>
                                                setOpen((prev) => !prev)
                                            }
                                        >
                                            {open === true
                                                ? "Скрыть"
                                                : "Все вопросы"}
                                        </DefaultButton>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    <div className={`${styles.side} ${styles.sideSecond}`}>
                        <div className={styles.contact}>
                            <div className={styles.contact_title}>
                                Задать вопрос
                            </div>
                            <div className={styles.phone}>
                                <div className={styles.social_list}>
                                    <a
                                        className={styles.social_icon}
                                        target="_blank"
                                        href="https://vk.com/rsosamara"
                                    >
                                        <Image
                                            src={images.vkBlue}
                                            width={40}
                                            height={40}
                                        />
                                    </a>
                                    <a
                                        className={styles.social_icon}
                                        target="_blank"
                                        href="https://t.me/samro_rso"
                                    >
                                        <Image
                                            src={images.tgBlue}
                                            width={40}
                                            height={40}
                                        />
                                    </a>
                                </div>

                                <a
                                    className={styles.phone_number}
                                    href="tel:+78462026082"
                                >
                                    +7 (846) 202-60-82
                                </a>
                            </div>
                        </div>
                        {documentsBtn && (
                            <div>
                                <Spacer size="md" />
                                <div
                                    style={{
                                        margin: "0 auto",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className={styles.docBtn}>
                                        <DefaultButton
                                            type="whiteDoc"
                                            icon={images.doc}
                                            onClick={() =>
                                                router.push("/documents")
                                            }
                                            hrefLink={"/documents"}
                                        >
                                            Документы
                                        </DefaultButton>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqLayout;

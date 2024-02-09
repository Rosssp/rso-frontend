import Image from "next/image";
import React from "react";
import images from "../../constants/images";
import CustomLink from "../UI/customLink/CustomLink";
import DefaultButton from "../UI/button/DefaultButton";

import styles from "./smallnews.module.scss";
import Spacer from "../UI/spacer/Spacer";

import { useRouter } from "next/router";

export default function SmallNews({ news }) {
    const router = useRouter();
    const dateFormater = (date) => {
        return date.split("-").reverse().join(".");
    };

    return (
        <>
            <h1 className="title">НОВОСТИ</h1>
            <Spacer size="md" />
            <div className={styles.smallNews__wrapper}>
                {news.map((item) => (
                    <>
                        {item.to_mainpage && (
                            <div
                                className={styles.smallNews__container}
                                onClick={() =>
                                    router.push(`/news/${item.slug}`)
                                }
                            >
                                <div className={styles.smallNews__image}>
                                    <Image
                                        src={
                                            process.env.NEXT_PUBLIC_MEDIA +
                                            "/" +
                                            item.image
                                        }
                                        objectFit="cover"
                                        width={500}
                                        height={0}
                                    />
                                </div>
                                <div
                                    className={
                                        styles.smallNews__text__container
                                    }
                                >
                                    <div className={styles.smallNews__title}>
                                        {item.title}
                                        <div
                                            className={styles.smallNews__descr}
                                            dangerouslySetInnerHTML={{
                                                __html: `${item.short_text}`,
                                            }}
                                        ></div>
                                    </div>
                                    <div
                                        className={
                                            styles.smallNews__link__container
                                        }
                                    >
                                        <div className={styles.smallNews__link}>
                                            <CustomLink
                                                color="#0672A8"
                                                href={`/news/${item.slug}`}
                                            >
                                                Читать далее
                                            </CustomLink>
                                        </div>
                                        <div className={styles.smallNews__date}>
                                            {dateFormater(
                                                item.date_of_creation
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ))}
            </div>
            <div className={styles.smallNews__button}>
                <DefaultButton
                    type="blue"
                    isTargetBlank
                    icon={images.vkWhite}
                    hrefLink={"https://vk.com/rsosamara"}
                >
                    Следить за новостями
                </DefaultButton>
            </div>
        </>
    );
}

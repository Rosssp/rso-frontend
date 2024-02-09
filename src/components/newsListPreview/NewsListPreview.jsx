import Image from "next/image";
import React from "react";
import images from "../../constants/images";
import CustomLink from "../UI/customLink/CustomLink";
import DefaultButton from "../UI/button/DefaultButton";

import styles from "./NewsListPreview.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";

import { useRouter } from "next/router";

export default function NewsListPreview({ posts }) {
    const router = useRouter();
    const mob = useMediaQuery(980);
    const dateFormater = (date) => {
        return date.split("-").reverse().join(".");
    };
    return (
        <>
            <div className={styles.NewsListPreview__wrapper}>
                {posts.map((item) => (
                    <div
                        className={styles.NewsListPreview__container}
                        onClick={() => router.push(`/news/${item.slug}`)}
                    >
                        <div className={styles.NewsListPreview__date}>
                            {dateFormater(item.date_of_creation)}
                        </div>
                        <div className={styles.NewsListPreview__body}>
                            <div className={styles.NewsListPreview__image}>
                                <Image
                                    src={
                                        process.env.NEXT_PUBLIC_MEDIA +
                                        "/" +
                                        item.image
                                    }
                                    objectFit="cover"
                                    width={500}
                                    height={0}
                                    alt={item.title}
                                />
                            </div>
                            <div
                                className={
                                    styles.NewsListPreview__text__container
                                }
                            >
                                <div className={styles.NewsListPreview__title}>
                                    {item.title}
                                </div>
                                <div
                                    className={
                                        styles.NewsListPreview__link__container
                                    }
                                >
                                    <div
                                        className={styles.NewsListPreview__link}
                                    >
                                        <CustomLink
                                            color="#0672A8"
                                            href={`/news/${item.slug}`}
                                        >
                                            Читать далее
                                        </CustomLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div
                style={
                    mob
                        ? {
                              display: "flex",
                              justifyContent: "flex-end",
                              maxWidth: "908px",
                              margin: "40px auto 0",
                              padding: "0 14px",
                          }
                        : {
                              display: "flex",
                              justifyContent: "flex-start",
                              maxWidth: "908px",
                              margin: "40px auto 0",
                          }
                }
            >
                <DefaultButton
                    type="blue"
                    icon={images.vkWhite}
                    isTargetBlank
                    hrefLink={"https://vk.com/rsosamara"}
                >
                    Следить за новостями
                </DefaultButton>
            </div>
        </>
    );
}

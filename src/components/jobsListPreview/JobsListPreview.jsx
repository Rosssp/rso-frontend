import Image from "next/image";
import React from "react";
import images from "../../constants/images";
import CustomLink from "../UI/customLink/CustomLink";
import DefaultButton from "../UI/button/DefaultButton";

import styles from "./JobsListPreview.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function JobsListPreview({ posts }) {
    const mob = useMediaQuery(980);

    return (
        <>
            <div className={styles.JobsListPreview__wrapper}>
                {posts.map((item) => (
                    <div className={styles.JobsListPreview__container}>
                        <div className={styles.JobsListPreview__date}>
                            {item.date_of_creation}
                        </div>
                        <div className={styles.JobsListPreview__body}>
                            <div className={styles.JobsListPreview__image}>
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
                                    styles.JobsListPreview__text__container
                                }
                            >
                                <div className={styles.JobsListPreview__title}>
                                    {item.title}
                                </div>
                                <div
                                    className={
                                        styles.JobsListPreview__link__container
                                    }
                                >
                                    <div
                                        className={styles.JobsListPreview__link}
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
                <DefaultButton type="blue" isTargetBlank icon={images.vkWhite} hrefLink={"https://vk.com/rsosamara"}>
                    Следить за новостями
                </DefaultButton>
            </div>
        </>
    );
}

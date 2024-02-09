import React, { useState } from "react";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import CustomLink from "../UI/customLink/CustomLink";
import Spacer from "../UI/spacer/Spacer";
import VacancyCard from "../UI/vacancyCard/VacancyCard";

import styles from "./vac.module.scss";

export default function Vacancy({ vacancy }) {
    const vacancyMob = useMediaQuery(768);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                style={
                    vacancyMob
                        ? {
                              backgroundColor: "",
                          }
                        : { backgroundColor: "white" }
                }
            >
                <Spacer size="sm" />
                <h1 className="title">Вакансии</h1>
                <Spacer size="sm" />

                {vacancyMob ? (
                    <>
                        <div className={styles.vac__container}>
                            {vacancy
                                .slice(0, open === false ? 3 : vacancy.length)
                                .map((item) => (
                                    <VacancyCard
                                        txt={item.title}
                                        img={
                                            process.env.NEXT_PUBLIC_MEDIA +
                                            "/" +
                                            item.image
                                        }
                                        href={`/jobs/${item.slug}`}
                                    />
                                ))}
                        </div>
                        {vacancy.length > 3 && (
                            <div
                                className={styles.button}
                                onClick={() => {
                                    setOpen((prev) => !prev);
                                }}
                            >
                                {open === false ? (
                                    <p>Показать всё</p>
                                ) : (
                                    <p>Скрыть</p>
                                )}
                            </div>
                        )}
                        <Spacer size="xl" />
                    </>
                ) : (
                    <>
                        <div className={styles.vac__container}>
                            {vacancy.map((item) => (
                                <VacancyCard
                                    txt={item.title}
                                    img={
                                        process.env.NEXT_PUBLIC_MEDIA +
                                        "/" +
                                        item.image
                                    }
                                    href={`/jobs/${item.slug}`}
                                />
                            ))}
                        </div>
                        <Spacer size="xl" />
                    </>
                )}
            </div>
        </>
    );
}

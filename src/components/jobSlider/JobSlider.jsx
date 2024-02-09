import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import styles from "./jobSlider.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import LearnCard from "../learnCard/learnCard";
import LoadingIcon from "../UI/LoadingIcon/LoadingIcon";

export default function JobSlider({ type, education }) {
    const desc1024 = useMediaQuery(1024);
    const mob768 = useMediaQuery(768);

    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        const lol = () => {
            setIsLoad(true);
        };
        lol();
    }, [education]);

    return (
        <>
            {mob768 ? (
                <div>
                    <div
                        style={{
                            margin: "0 auto",
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={40}
                                navigation={{
                                    nextEl: ".next",
                                    prevEl: ".prev",
                                    lockClass: "disabled",
                                }}
                                modules={[Navigation, Pagination]}
                                pagination={{
                                    clickable: true,
                                    el: ".dots-yellow",
                                }}
                                className={styles.jobSlider__wrapper}
                            >
                                {education.education_options.length > 0 ? (
                                    education.education_options.map((item) => (
                                        <SwiperSlide
                                            style={{
                                                alignItems: "center",
                                                justifyContent: " center",
                                                display: "flex",
                                            }}
                                        >
                                            <LearnCard
                                                title={item.title}
                                                description={
                                                    item.short_description
                                                }
                                                type={type}
                                                img={
                                                    process.env
                                                        .NEXT_PUBLIC_MEDIA +
                                                    "/" +
                                                    item.photo
                                                }
                                                slug={item.id}
                                            />
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <p className={styles.noResult}>
                                        На данный момент нет актуальных
                                        обучений. Следи за новостями
                                    </p>
                                )}
                            </Swiper>
                            {education.education_options.length > 1 && (
                                <div className={"dots-yellow"}></div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div
                        style={{
                            // maxWidth: "1010px",
                            margin: "0 auto",
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0 30px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            {!isLoad ? (
                                <>
                                    <LoadingIcon />
                                </>
                            ) : (
                                <>
                                    {desc1024 ? (
                                        <>
                                            {education.education_options
                                                .length > 2 && (
                                                <div className={"prev white"}>
                                                    <Image
                                                        src={images.Arrow}
                                                        style={{
                                                            transform:
                                                                "scale(-1)",
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {education.education_options
                                                .length >= 4 && (
                                                <div className={"prev white"}>
                                                    <Image
                                                        src={images.Arrow}
                                                        style={{
                                                            transform:
                                                                "scale(-1)",
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                    {education.education_options.length > 0 ? (
                                        <Swiper
                                            slidesPerView={desc1024 ? 2 : 3}
                                            spaceBetween={40}
                                            navigation={{
                                                nextEl: ".next",
                                                prevEl: ".prev",
                                                // lockClass: "disabled",
                                            }}
                                            modules={[Navigation, Pagination]}
                                            pagination={{
                                                clickable: true,
                                                el: ".dots-yellow",
                                            }}
                                            className={
                                                styles.jobSlider__wrapper
                                            }
                                        >
                                            {education.education_options.map(
                                                (item) => (
                                                    <SwiperSlide>
                                                        <LearnCard
                                                            title={item.title}
                                                            description={
                                                                item.short_description
                                                            }
                                                            type={type}
                                                            img={
                                                                process.env
                                                                    .NEXT_PUBLIC_MEDIA +
                                                                "/" +
                                                                item.photo
                                                            }
                                                            slug={item.id}
                                                        />
                                                    </SwiperSlide>
                                                )
                                            )}
                                        </Swiper>
                                    ) : (
                                        <p className={styles.noResult}>
                                            На данный момент нет актуальных
                                            обучений. Следи за новостями
                                        </p>
                                    )}

                                    {desc1024 ? (
                                        <>
                                            {education.education_options
                                                .length > 2 && (
                                                <div className={"next white"}>
                                                    <Image src={images.Arrow} />
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {education.education_options
                                                .length >= 4 && (
                                                <div className={"next white"}>
                                                    <Image src={images.Arrow} />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

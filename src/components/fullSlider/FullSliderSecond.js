import Image from "next/image";
import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import CustomLink from "../UI/customLink/CustomLink";
import SliderIcons from "../UI/sliderLayouts/SliderIcons";

import styles from "./fullSlider.module.scss";

export default function HeaderFullSliderSecond({ banner }) {
    const mob830 = useMediaQuery(830);

    return (
        <>
            {banner ? (
                <div className={styles.fullpageSlider__container}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={100}
                        navigation={{
                            nextEl: ".bottom-nextSecond",
                            prevEl: ".bottom-prevSecond",
                            lockClass: "disabled",
                        }}
                        modules={[Navigation, Pagination]}
                        pagination={{
                            clickable: true,
                            el: ".dotsSecond",
                        }}
                        // loop={banner?.length > 1 && true}
                    >
                        {banner?.map((item) => (
                            <SwiperSlide
                                className={
                                    styles.fullpageSlider_slide__container
                                }
                            >
                                <div className={styles.blueGradient__slider}>
                                    <div className={styles.fullpageSlider_text}>
                                        <h1
                                            dangerouslySetInnerHTML={{
                                                __html: `${item.text}`,
                                            }}
                                        ></h1>
                                        <CustomLink
                                            type="white"
                                            color="white"
                                            href={`${item.url}`}
                                        >
                                            Читать подробнее
                                        </CustomLink>
                                    </div>
                                    <Image
                                        className={styles.fullpageSlider_img}
                                        src={
                                            process.env.NEXT_PUBLIC_MEDIA +
                                            "/" +
                                            item.banner_announce
                                        }
                                        alt="First slide"
                                        objectFit="cover"
                                        width={500}
                                        height={0}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {banner?.length > 1 && (
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "36px",
                            }}
                        >
                            {mob830 ? (
                                ""
                            ) : (
                                <div className={"bottom-prevSecond"}>
                                    <Image
                                        src={images.Arrow}
                                        style={{ transform: "scale(-1)" }}
                                    />
                                </div>
                            )}
                            <div
                                className={"dotsSecond"}
                                style={{ marginTop: "0" }}
                            ></div>
                            {mob830 ? (
                                ""
                            ) : (
                                <div className={"bottom-nextSecond"}>
                                    <Image src={images.Arrow} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                ""
            )}
        </>
    );
}

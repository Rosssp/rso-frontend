import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import images from "../../constants/images";
import StorySlider from "../../components/storySlider/StorySlider";

import styles from "./storySliderLayout.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import Spacer from "../../components/UI/spacer/Spacer";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

export default function StorySliderLayout({ children, historyList }) {
    const mob980 = useMediaQuery(980);

    const [newList, setNewList] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    useEffect(() => {
        const sdlkjf = () => {
            setIsLoad(false);
            setNewList(shuffle(historyList));
            setIsLoad(true);
        };

        sdlkjf();
    }, [historyList]);

    return (
        <>
            <div className={styles.main__wrapper}>
                <div className={`${styles.title} title`}>
                    вдохновляющие истории наших бойцов
                </div>
                <Spacer size="md" />
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        {mob980 ? (
                            ""
                        ) : (
                            <>
                                {newList.length >= 2 && (
                                    <div className={"prev white"}>
                                        <Image
                                            src={images.Arrow}
                                            style={{ transform: "scale(-1)" }}
                                        />
                                    </div>
                                )}
                            </>
                        )}
                        {!isLoad ? (
                            <>
                                <LoadingIcon />
                            </>
                        ) : (
                            <>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={60}
                                    navigation={{
                                        prevEl: ".prev",
                                        nextEl: ".next",
                                        lockClass: "disabled",
                                    }}
                                    modules={[Navigation, Pagination]}
                                    pagination={{
                                        clickable: true,
                                        el: ".dots-yellow",
                                    }}
                                    // loop={true}
                                    style={{
                                        overflow: "hidden",
                                        maxWidth: "806px",
                                    }}
                                >
                                    {newList.map((item, index) => (
                                        <SwiperSlide>
                                            <StorySlider
                                                title={item.full_name}
                                                subTitle={item.direction}
                                                img={
                                                    process.env
                                                        .NEXT_PUBLIC_MEDIA +
                                                    "/" +
                                                    item.image
                                                }
                                                text={item.text}
                                                rating={item.type_task}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )}
                        {mob980 ? (
                            ""
                        ) : (
                            <>
                                {newList.length >= 2 && (
                                    <div className={"next white"}>
                                        <Image src={images.Arrow} />
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className={"dots-yellow"}></div>
                </div>

                {children && <>{children}</>}
            </div>
        </>
    );
}

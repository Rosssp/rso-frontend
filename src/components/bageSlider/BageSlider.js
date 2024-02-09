import React from "react";

import styles from "./bageSlider.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function BageSlider() {
    const media1024 = useMediaQuery(1024);
    const media425 = useMediaQuery(425);

    const array = [
        {
            id: "1",
            src: "https://sun9-86.userapi.com/impg/SOY4p5RJVifXJVbAi2echbCgtnikqHrNqr_zOQ/oFGmIYsJDaU.jpg?size=1280x865&quality=96&sign=0f0b953586a05915dc97687294a0bbfa&type=album",
            title: "Bage",
            text: "Some quick example",
        },
        {
            id: "2",
            src: "https://sun9-86.userapi.com/impg/SOY4p5RJVifXJVbAi2echbCgtnikqHrNqr_zOQ/oFGmIYsJDaU.jpg?size=1280x865&quality=96&sign=0f0b953586a05915dc97687294a0bbfa&type=album",
            title: "Bage",
            text: "Some quick example",
        },
        {
            id: "3",
            src: "https://sun9-86.userapi.com/impg/SOY4p5RJVifXJVbAi2echbCgtnikqHrNqr_zOQ/oFGmIYsJDaU.jpg?size=1280x865&quality=96&sign=0f0b953586a05915dc97687294a0bbfa&type=album",
            title: "Bage",
            text: "Some quick example",
        },
        {
            id: "4",
            src: "https://sun9-86.userapi.com/impg/SOY4p5RJVifXJVbAi2echbCgtnikqHrNqr_zOQ/oFGmIYsJDaU.jpg?size=1280x865&quality=96&sign=0f0b953586a05915dc97687294a0bbfa&type=album",
            title: "Bage",
            text: "Some quick example",
        },
        {
            id: "5",
            src: "https://sun9-86.userapi.com/impg/SOY4p5RJVifXJVbAi2echbCgtnikqHrNqr_zOQ/oFGmIYsJDaU.jpg?size=1280x865&quality=96&sign=0f0b953586a05915dc97687294a0bbfa&type=album",
            title: "Bage",
            text: "Some quick example",
        },
        {
            id: "6",
            src: "https://sun9-86.userapi.com/impg/SOY4p5RJVifXJVbAi2echbCgtnikqHrNqr_zOQ/oFGmIYsJDaU.jpg?size=1280x865&quality=96&sign=0f0b953586a05915dc97687294a0bbfa&type=album",
            title: "Bage",
            text: "Some quick example",
        },
        {
            id: "7",
            src: "https://sun9-86.userapi.com/impg/SOY4p5RJVifXJVbAi2echbCgtnikqHrNqr_zOQ/oFGmIYsJDaU.jpg?size=1280x865&quality=96&sign=0f0b953586a05915dc97687294a0bbfa&type=album",
            title: "Bage",
            text: "Some quick example",
        },

        {
            id: "8",
            src: "https://sun9-86.userapi.com/impg/SOY4p5RJVifXJVbAi2echbCgtnikqHrNqr_zOQ/oFGmIYsJDaU.jpg?size=1280x865&quality=96&sign=0f0b953586a05915dc97687294a0bbfa&type=album",
            title: "Bage",
            text: "Some quick example",
        },
        {
            id: "9",
            src: "https://sun9-86.userapi.com/impg/SOY4p5RJVifXJVbAi2echbCgtnikqHrNqr_zOQ/oFGmIYsJDaU.jpg?size=1280x865&quality=96&sign=0f0b953586a05915dc97687294a0bbfa&type=album",
            title: "Bage",
            text: "Some quick example",
        },
        {
            id: "10",
            src: "https://sun9-86.userapi.com/impg/SOY4p5RJVifXJVbAi2echbCgtnikqHrNqr_zOQ/oFGmIYsJDaU.jpg?size=1280x865&quality=96&sign=0f0b953586a05915dc97687294a0bbfa&type=album",
            title: "Bage",
            text: "Some quick example",
        },
    ];

    return (
        <div className={styles.lol}>
            {/* <CarouselIcons
                show={media1024 ? 4 : 5}
                slide={2}
                transition={0.5}
                responsive={true}
                swiping={true}
                leftArrow={
                    <>
                        <div
                            style={{
                                position: "absolute",
                                left: "0",
                                top: "50%",
                                zIndex: "99",
                                filter: "brightness(0.4)",
                                width: "40px",
                                height: "40px",
                                transform: "rotate(180deg)",
                            }}
                        >
                            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" />
                        </div>
                    </>
                }
                rightArrow={
                    <>
                        <div
                            style={{
                                position: "absolute",
                                right: "0",
                                top: "50%",
                                zIndex: "99",
                                filter: "brightness(0.4)",
                                width: "40px",
                                height: "40px",
                            }}
                        >
                            <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" />
                        </div>
                    </>
                }
            >
                {array.map((item) => (
                    <div className={styles.bage__item} key={item.id}>
                        <div className={styles.bage__img} id="item">
                            <img src={item.src} />
                        </div>
                        <div className={styles.bage__text}>{item.text}</div>
                    </div>
                ))}
            </CarouselIcons> */}
        </div>
    );
}

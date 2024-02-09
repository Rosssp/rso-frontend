import React, { useEffect, useRef, useState } from "react";

import styles from "./bageSlider.module.scss";

export default function BageSlider() {
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

    const container = useRef(null);

    const [width, setWidth] = useState(148 * 2);

    let pos = 0;

    const nextHandle = () => {
        pos -= width;
        pos < -444 ? (pos = 0) : "";
        container.current.childNodes.forEach((e) => {
            e.style = `transform: translateX(${pos}px)`;
        });
    };

    const prevHandle = () => {
        pos += width;
        pos > 0 ? (pos = -444) : "";
        container.current.childNodes.forEach((e) => {
            e.style = `transform: translateX(${pos}px)`;
        });
    };

    return (
        <div className={styles.bage__wrapper}>
            <div
                className={styles.bage__controll_left}
                onClick={prevHandle}
            ></div>
            <div className={styles.bage__containter}>
                <div
                    id="transform"
                    className={styles.bage__transform}
                    ref={container}
                >
                    {array.map((item, i) => (
                        <div className={styles.bage__item} key={item.id}>
                            <div className={styles.bage__img} id="item">
                                <img src={item.src} />
                            </div>
                            <div className={styles.bage__text}>{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={styles.bage__controll_right}
                onClick={nextHandle}
            ></div>
        </div>
    );
}

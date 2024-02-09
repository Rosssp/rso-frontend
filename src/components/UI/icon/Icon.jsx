import React from "react";
import styles from "./Icon.module.scss";
import Image from "next/image";

const Icon = ({ src, width = 24, height = 24, props }) => {
    return (
        <>
            <div
                className={styles.wrapper}
                style={{ transform: `${props}`, transition: "0.4s all ease" }}
            >
                <Image src={src} alt={"Иконка"} width={width} height={height} />
            </div>
        </>
    );
};

export default Icon;

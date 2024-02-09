import React from "react";
import Image from "next/image";
import images from "../../constants/images";

import styles from "./gar.module.scss";

export default function Left() {
    return (
        <div className={styles.arrowLeft}>
            <Image
                style={{
                    width: "24px",
                    height: "24px",
                    transform: "rotate(90deg)",
                }}
                src={images.triangle}
            />
        </div>
    );
}

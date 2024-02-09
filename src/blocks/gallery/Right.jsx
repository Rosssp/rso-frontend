import React from "react";
import Image from "next/image";
import images from "../../constants/images";

import styles from "./gar.module.scss";

export default function Right() {
    return (
        <div className={styles.arrowRight}>
            <Image
                style={{
                    width: "24px",
                    height: "24px",
                    transform: "rotate(-90deg)",
                }}
                src={images.triangle}
            />
        </div>
    );
}

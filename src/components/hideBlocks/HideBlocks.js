import React from "react";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import DefaultButton from "../UI/button/DefaultButton";
import Spacer from "../UI/spacer/Spacer";

import styles from "./hideBlocks.module.scss";

export default function HideBlocks({ onClick }) {
    const mob768 = useMediaQuery(768);
    return (
        <>
            <Spacer size="sm" />
            <div className={styles.hide__wrapper}>
                {mob768 ? "" : <div className={styles.line}></div>}
                <div className={styles.button}>
                    <DefaultButton
                        type="outline_blue"
                        onClick={onClick}
                        icon={images.triangleBlue}
                    >
                        Свернуть
                    </DefaultButton>
                </div>
                {mob768 ? "" : <div className={styles.line}></div>}
            </div>
            <Spacer size="md" />
        </>
    );
}

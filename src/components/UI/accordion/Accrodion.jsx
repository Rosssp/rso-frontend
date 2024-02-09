import React, { useState } from "react";
import styles from "./Accrodion.module.scss";

const Accrodion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={styles.question_item}
            onClick={() => setIsActive(!isActive)}
        >
            <div className={styles.question_body}>
                <span className={styles.question_item_title}>{title}</span>
                {isActive && (
                    <div
                        className={styles.question_content}
                        dangerouslySetInnerHTML={{ __html: `${content}` }}
                    ></div>
                )}
            </div>
            <span className={styles.question_item_icon}>
                <span
                    className={
                        isActive ? styles.triangle_active : styles.triangle
                    }
                ></span>
            </span>
        </div>
    );
};

export default Accrodion;

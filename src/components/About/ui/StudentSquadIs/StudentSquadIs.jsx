import React from "react";
import styles from "./StudentSquadIs.module.css";
import Image from "next/image";

import images from "../../../../constants/images";

export const StudentSquadIs = () => {
    return (
        <section className={styles.body}>
            <div className={styles.image}>
                <Image
                    src={images.studentSquadIs}
                    alt="Студенческий отряд - это"
                    title="Студенческий отряд - это"
                    layout="fill"
                />
            </div>
            <div className={styles.description}>
                <h2>Студенческий отряд - это</h2>
                <p>
                    Форма организации студентов образовательных организаций
                    различных форм обучения, изъявивших желание в свободное от
                    учебы время трудиться в различных отраслях хозяйства,
                    выполняющих общую производственную задачу и одновременно
                    реализующих общественно полезную программу.
                </p>
                <p>
                    Отряды работают по разным направлениям: строительные,
                    педагогические, сельскохозяйственные, сервисные,
                    оперативные, отряды проводников и другие.
                </p>
            </div>
        </section>
    );
};

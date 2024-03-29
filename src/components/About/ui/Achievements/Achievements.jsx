import React from "react";
import styles from "./Achievements.module.css";

import Image from "next/image";
import images from "../../../../constants/images";

export const Achievements = () => {
    return (
        <section className={styles.body}>
            <div className={styles.text}>
                <h2>Развитие студенческого отряда</h2>
                <p>
                    Новый вектор, импульс в развитии движение получило благодаря
                    подписанному 30 июня 2021 года Губернатором Самарской
                    области Д.И. Азаровым закону Самарской области № 58-ГД «О
                    государственной поддержке студенческих отрядов в Самарской
                    области».
                </p>
                <p>
                    Закон направлен на всестороннее развитие деятельности
                    студенческих отрядов в Самарской области. Такая поддержка
                    позволяет увеличивать количество бойцов и направлений
                    деятельности, расширяет перечень образовательных
                    организаций.
                </p>
                <p>
                    Положениями Закона закрепляются полномочия Самарской
                    Губернской Думы и Правительства Самарской области в сфере
                    оказания государственной поддержки студенческих отрядов
                    региона.
                </p>
                <p>
                    Студенческие отряды Самарской области поддерживают связь
                    поколений, встречаются на ежегодных всероссийских слетах,
                    окружных школах и спартакиадах, творческих фестивалях.
                </p>
                <p>
                    Помимо непосредственной работы в летнем трудовом семестре,
                    студенческие отряды в течение всего учебного года организуют
                    и участвуют в социально-значимых акциях всероссийского,
                    окружного и регионального уровней, направленные на помощь
                    детям, ветеранам и другим незащищенным слоям населения.
                </p>
                <p>
                    Все это благоприятно сказывается на социальном статусе бойца
                    Российских Студенческих Отрядов, и поднимает общественную
                    значимость работы, проводимой бойцами в течение всего
                    календарного года.
                </p>
            </div>
            <div className={styles.image}>
                <Image
                    src={images.achievements}
                    alt="Развитие студенческого отряда"
                    title="Развитие студенческого отряда"
                    layout="fill"
                />
            </div>
        </section>
    );
};

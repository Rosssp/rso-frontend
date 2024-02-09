import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import DefaultButton from "../UI/button/DefaultButton";
import Spacer from "../UI/spacer/Spacer";
import styles from "./procedureOfActions.module.scss";

export default function ProcedureOfActions() {
    const tempItem = [
        {
            id: "1",
            text: "Ознакомиться с порядком осуществления отбора и лотами на сайте “ТрудКрут.рф”",
        },
        {
            id: "2",
            text: "Установить контакт с представителем МООО “РСО” вашего региона",
        },
        {
            id: "3",
            text: "Подать заявку на обучение по выбранным лотам",
        },
        {
            id: "4",
            text: "В случае победы заключить договор с Оператором конкурсного отбора",
        },
        {
            id: "5",
            text: "Организовать обучение участников студенческих отрядов",
        },
        {
            id: "6",
            text: "Подготовить отчет о расходовании полученных средств",
        },
    ];
    const mob611 = useMediaQuery(611);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Порядок действий</div>
            <Spacer size="xs" />
            <div className={styles.items}>
                {tempItem.map((item) => (
                    <div className={styles.item}>
                        <div className={styles.item_number}>{item.id}</div>
                        <div className={styles.item_text}>{item.text}</div>
                    </div>
                ))}
            </div>
            {mob611 ? (
                <div style={{ marginTop: "30px" }}>
                    <DefaultButton type="default">
                        Стать участником программы
                    </DefaultButton>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

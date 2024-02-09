import styles from "./WantJoinBlock.module.scss";
import HumanInfo from "../HumanInfo/HumanInfo";
import DefaultForm from "../DefaultForm/DefaultForm";
import React from "react";

const WantJoinBlock = ({
    title = "хочу присоединиться к этому направлению",
    direction = "Не указано",
    headquarters = [],
    contacts,
}) => {
    const initialFormData = {
        full_name: "",
        phone_number: "",
        communication_method: "",
        direction: direction,
    };

    return (
        <>
            <div className={styles.WantJoinBlock}>
                <div className={styles.WantJoinBlock_wrapper}>
                    <h3 className={styles.WantJoinBlock_title}>{title}</h3>

                    <div className={styles.WantJoinBlock_description}>
                        <p>
                            Начни профессиональный рост и жизнь, полную
                            путешествий, востребованных обучений и верных друзей
                            в команде Студенческих отрядов Самарской области.
                        </p>
                        <p>
                            Ты сможешь задать все интересующие тебя вопросы и
                            принять окончательное решение после разговора.
                        </p>
                    </div>

                    <div className={styles.WantJoinBlock_form}>
                        <div className={styles.WantJoinBlock_form_wrapper}>
                            <div className={styles.WantJoinBlock_info}>
                                Заполняй анкету и наш специалист обязательно с
                                тобой свяжется.
                            </div>
                            <DefaultForm
                                type={"join"}
                                formInitialValues={initialFormData}
                                headquarter={headquarters}
                            />
                        </div>
                    </div>
                    {contacts && (
                        <div className={styles.WantJoinBlock_question}>
                            <h3 className={styles.WantJoinBlock_title}>
                                Остались вопросы?
                            </h3>
                            <HumanInfo contacts={contacts} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default WantJoinBlock;

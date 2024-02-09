import React, { useState } from "react";
import DefaultForm from "../DefaultForm/DefaultForm";
import CustomModal from "../modal/Modal";
import DefaultButton from "../UI/button/DefaultButton";
import styles from "./wanttosign.module.scss";

export default function WantToSign() {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.wts__container}>
            <div className={styles.wts__title}>
                <span>Хочешь записаться?</span>
                Пиши руководителю своего штаба
            </div>
            <div>
                <DefaultButton type="default" onClick={() => setOpen(true)}>
                    Записаться в РСО
                </DefaultButton>
            </div>
            <CustomModal isOpen={open} setIsOpen={setOpen}>
                <DefaultForm type="join"  modal__info="Заполните заявку и с вами свяжется наш специалист"/>
            </CustomModal>
        </div>
    );
}

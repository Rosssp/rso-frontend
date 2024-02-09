import React, { useEffect, useState } from "react";
import styles from "./SquadLayout.module.scss";
import DefaultButton from "../../components/UI/button/DefaultButton";
import Spacer from "../../components/UI/spacer/Spacer";
import SquadCard from "../../components/UI/cards/squadCard/SquadCard";
import useMediaQuery from "../../hooks/useMediaQuery";
import squad from "../../constants/squad";
import CustomModal from "../../components/modal/Modal";
import DefaultForm from "../../components/DefaultForm/DefaultForm";

const SquadLayout = ({
    titleColor = "#2B3A65",
    textColor = "#0672A8",
    open = true,
    HQ,
    backgroundColor,
}) => {
    const media900 = useMediaQuery(900);
    const [isOpen, setIsOpen] = useState(media900);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    useEffect(() => {
        setIsOpen(media900);
    }, [media900]);

    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.title} style={{ color: titleColor }}>
                    Направления наших отрядов
                </h2>
                <Spacer size="md" />
                <div className={styles.list}>
                    {squad.list
                        .slice(0, isOpen ? 3 : squad.list.length)
                        .map((item) => (
                            <SquadCard {...item} />
                        ))}
                </div>
                <Spacer size="md" />
                <div className={styles.controls}>
                    {open === true ? (
                        <>
                            {media900 && (
                                <span
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    className={styles.controls_open}
                                    style={{ color: textColor }}
                                >
                                    {!isOpen ? "Скрыть список" : "Показать еще"}
                                </span>
                            )}
                        </>
                    ) : (
                        ""
                    )}
                    <DefaultButton
                        type="default"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Хочу вступить
                    </DefaultButton>
                </div>
            </div>

            <CustomModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <DefaultForm type="join" modal__info="Заполните заявку и с вами свяжется наш специалист"/>
            </CustomModal>
        </>
    );
};

export default SquadLayout;

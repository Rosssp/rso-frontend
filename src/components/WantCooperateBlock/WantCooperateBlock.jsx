import styles from "./WantCooperateBlock.module.scss";
import DefaultForm from "../DefaultForm/DefaultForm";

const WantCooperateBlock = () => {
    return (
        <>
            <div className={styles.WantCooperateBlock} id="formCooperate">
                <div className={styles.WantCooperateBlock_wrapper}>
                    <h3 className={styles.WantCooperateBlock_title}>
                        Хочу сотрудничать
                    </h3>

                    <div className={styles.WantCooperateBlock_form}>
                        <div className={styles.WantCooperateBlock_form_wrapper}>
                            <div className={styles.WantCooperateBlock_info}>
                                Заполните заявку и с вами свяжется наш
                                специалист
                            </div>

                            <DefaultForm type={"cooperate"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WantCooperateBlock;

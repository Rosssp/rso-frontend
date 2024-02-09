import React from "react";
import ProcedureOfActions from "../../components/procedureOfActions/procedureOfActions";
import DefaultButton from "../../components/UI/button/DefaultButton";
import SquadCard from "../../components/UI/cards/squadCard/SquadCard";
import Spacer from "../../components/UI/spacer/Spacer";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./opportunitiesOfOrganizationsLayout.module.scss";

export default function OpportunitiesOfOrganizationsLayout() {
    const tempItem = [
        {
            descr: "Получить субсидию в форме гранта на проведение обучения",
            image: images.money,
        },
        {
            descr: "Организовать сотрудничество с региональным отделением МООО “РСО”",
            image: images.partners,
        },
    ];

    const mob611 = useMediaQuery(611);
    return (
        <div className={styles.wrapper}>
            <div className={styles.side}>
                <Spacer size="xl" />
                <div
                    className="title"
                    style={
                        mob611
                            ? { width: "70%" }
                            : { width: "50%", textTransform: "uppercase" }
                    }
                >
                    возможности для образовательных организаций
                </div>
                <Spacer size="md" />
                <div className={styles.cards}>
                    {tempItem.map((item, index) => (
                        <SquadCard
                            description={item.descr}
                            icon={item.image}
                            key={index}
                            nolink
                        />
                    ))}
                </div>
                <Spacer size="md" />
                {mob611 ? (
                    ""
                ) : (
                    <>
                        <DefaultButton
                            type="default"
                            isTargetBlank
                            hrefLink={
                                "https://xn--d1amqcgedd.xn--p1ai/profobuchenie_studencheskikh_otryadov.html"
                            }
                        >
                            Стать участником программы
                        </DefaultButton>
                        <div
                            style={{ height: "170px", userSelect: "none" }}
                        ></div>
                    </>
                )}
            </div>
            <div className={styles.side}>
                <ProcedureOfActions />
            </div>
        </div>
    );
}

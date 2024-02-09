import { useRouter } from "next/router";
import React from "react";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import DefaultButton from "../UI/button/DefaultButton";
import SquadCard from "../UI/cards/squadCard/SquadCard";
import Spacer from "../UI/spacer/Spacer";

import styles from "./squadPossibility.module.scss";

export default function SquadPossibility() {
    const mob600 = useMediaQuery(600);
    const item = [
        {
            image: images.parPos1,
            title: "Работать у проверенных работодателей",
            text: "С официальной оплатой без проблем по учебе",
        },
        {
            image: images.parPos2,
            title: "Выйти на рынок труда с опытом",
            text: "Востребованные знания и возможность дальнейшего трудоустройства",
        },
        {
            image: images.parPos3,
            title: "Найти друзей",
            text: "Таких же настроенных на развитие и успех",
        },
        {
            image: images.parPos4,
            title: "Получать бесплатное обучение",
            text: "Развивать свои профессиональные навыки",
        },
    ];

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/life");
    };
    return (
        <div className={styles.spb__wrapper}>
            <div className={styles.spb__container}>
                {item.map((item) => (
                    <>
                        {mob600 ? (
                            <SquadCard
                                title={item.title}
                                description={item.text}
                                icon={item.image}
                                width={296}
                                height={383}
                                widthImg={264}
                                heightImg={184}
                                type="sm"
                                anus={true}
                                nolink
                            />
                        ) : (
                            <SquadCard
                                title={item.title}
                                description={item.text}
                                icon={item.image}
                                width={296}
                                height={383}
                                widthImg={264}
                                heightImg={184}
                                type="poss"
                                typeTextAlignLeft="textAlignLeft"
                                nolink
                            />
                        )}
                    </>
                ))}
            </div>

            <Spacer size="lg" />
            <DefaultButton type="blue" onClick={handleClick} hrefLink={'/life'}>
                Узнать подробнее
            </DefaultButton>
        </div>
    );
}

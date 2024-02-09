import Image from "next/image";
import React, { useState } from "react";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import CustomLink from "../UI/customLink/CustomLink";
import Spacer from "../UI/spacer/Spacer";
import styles from "./storySlider.module.scss";

const hearts = (type) => {
    switch (type) {
        case "Сердечки":
            return (
                <>
                    {[0, 1, 2, 3, 4].map(() => (
                        <Image src={images.heart} alt="akjsdh" />
                    ))}
                </>
            );
        case "Звездочки":
            return (
                <>
                    {[0, 1, 2, 3, 4].map(() => (
                        <Image src={images.star} alt="akjsdh" />
                    ))}
                </>
            );
        case "Неизвестно":
            return (
                <>
                    {[0, 1, 2, 3, 4].map(() => (
                        <></>
                    ))}
                </>
            );
        default:
            return "error";
    }
};

export default function StorySlider({ title, subTitle, text, img, rating }) {
    const [open, setOpen] = useState(false);
    const mob768 = useMediaQuery(768);

    return (
        <div className={`${styles.container}  ${open && styles.mobTextShow}`}>
            <div className={styles.side__first}>
                <Image src={img} objectFit="cover" width={500} height={0} />
            </div>
            <div className={styles.side__second}>
                <div className={styles.side__second_title}>
                    <div className={styles.side__second_title_name}>
                        <div>{title}</div>
                        <div>{subTitle}</div>
                    </div>
                    <div className={styles.side__second_title_rating}>
                        <ul>{hearts(rating)}</ul>
                    </div>
                </div>
                <div
                    className={`${styles.side__second_text}`}
                    dangerouslySetInnerHTML={{
                        __html: `${text}`,
                    }}
                ></div>
                {mob768 ? (
                    <div
                        style={
                            open === true
                                ? { display: "none" }
                                : { marginTop: "20px" }
                        }
                        onClick={() => setOpen(true)}
                    >
                        <CustomLink type="default">Читать подробнее</CustomLink>
                        <Spacer size="sm" />
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

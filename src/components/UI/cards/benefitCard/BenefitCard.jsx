import React from "react";
import Image from "next/image";

import fun from "../../../../../public/images/fun.svg";
import styles from "./BenefitCard.module.scss";
import { useRouter } from "next/router";

const BenefitCard = ({
    title,
    description,
    icon,
    type,
    size = "default",
    widthTitle,
    heightTitle,
    href,
}) => {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };
    return (
        <>
            <a
                className={`${styles[`wrapper_${size}`]} ${styles[type]}`}
                onClick={(e) => (href ? handleClick(e) : console.clear())}
                href={href}
            >
                <div className={styles.header}>
                    <span
                        className={styles.title}
                        style={{
                            width: `${widthTitle}`,
                        }}
                    >
                        {title ? title : "Весело"}
                    </span>

                    <div className={styles.icon}>
                        <Image width={60} height={60} src={icon ? icon : fun} />
                    </div>
                </div>
                <div className={styles.body}>
                    <p
                        className={styles.description}
                        dangerouslySetInnerHTML={{
                            __html: `${
                                description
                                    ? description
                                    : "Быть в постоянном движении и центре событий"
                            }`,
                        }}
                    ></p>
                    {href && (
                        <p
                            className={styles.readMore}
                            onClick={() =>
                                href ? router.push(href) : console.clear()
                            }
                        >
                            Читать далее
                        </p>
                    )}
                </div>
            </a>
        </>
    );
};

export default BenefitCard;

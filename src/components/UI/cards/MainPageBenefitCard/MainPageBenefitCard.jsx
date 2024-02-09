import React from "react";
import Image from "next/image";
// import ContentLoader from "react-content-loader"

import fun from "../../../../../public/images/fun.svg";
// import styles from "./MainPageBenefitCard.module.scss";
import styles from './MainPageBenefitCard.module.scss'
import { useRouter } from "next/router";

const MainPageBenefitCard = ({
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
  return (
    <>
      <div
        className={`${styles[`wrapper_${size}`]} ${styles[type]}`}
        onClick={() => (href ? router.push(href) : console.clear())}
      >
        <div className={styles.header}>
          <span
            className={styles.title}
            style={{
              width: `${widthTitle}`,
            }}
          >
            {title ? "" : ""}
          </span>

          <div className={styles.icon}>
            <Image width={600} height={600} src={icon ? icon : fun} />
          </div>
        </div>
        <div className={styles.body}>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: `${
                description
                  ? ""
                  : ""
              }`,
            }}
          ></p>
          {href && (
            <p
              className={styles.readMore}
              onClick={() => (href ? router.push(href) : console.clear())}
            >
              Читать далее
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPageBenefitCard;

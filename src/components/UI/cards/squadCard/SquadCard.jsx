import React from "react";
import Image from "next/image";
import fun from "../../../../../public/images/fun.svg";
import DefaultButton from "../../button/DefaultButton";

import styles from "./SquadCard.module.scss";
import { useRouter } from "next/router";
import SponsorTitleMobile from "./SponsorCardMobile";
import useMediaQuery from "../../../../hooks/useMediaQuery";

const SquadCard = ({
  title,
  description,
  icon = fun,
  height = 256,
  width = 296,
  widthImg = 48,
  heightImg = 48,
  type,
  typeTextAlignLeft,
  href,
  routerTo = "squad",
  anus,
  paddingBody = false,
  nolink,
}) => {
  const router = useRouter();

  const mob870 = useMediaQuery(870);
  return (
    <>
    {nolink ? <>
      <div
        className={`${styles.wrapper_nohover} ${styles[type]}`}
        style={{ height: `${height}px`, width: `${width}px`, cursor: 'default' }}
      >
        <div className={`${styles.header} ${styles[typeTextAlignLeft]}`}>
          <div className={styles.icon}>
            <Image
              objectFit="cover"
              width={widthImg}
              height={heightImg}
              src={icon}
            />
          </div>

          {anus === true ? (
            <SponsorTitleMobile title={title} description={description} />
          ) : (
            <span className={`${styles.title} ${styles[typeTextAlignLeft]}`}>
              {title}
            </span>
          )}
        </div>
        {anus === true ? (
          ""
        ) : (
          <div className={styles.body}>
            <p
              style={
                paddingBody === true && !mob870
                  ? { padding: "0 20px" }
                  : { padding: "0" }
              }
              className={`${styles.description}  ${styles[typeTextAlignLeft]}`}
            >
              {description}
            </p>
          </div>
        )}
      </div>
    </> : <>
    <a
        className={`${styles.wrapper} ${styles[type]}`}
        style={{ height: `${height}px`, width: `${width}px` }}
        onClick={(e) => {
          e.preventDefault();
          router.push(
            routerTo === "social" ? `${href}` : `/${routerTo}/${href}`
          );
        }}
        href={routerTo === "social" ? `${href}` : `/${routerTo}/${href}`}
      >
        <div className={`${styles.header} ${styles[typeTextAlignLeft]}`}>
          <div className={styles.icon}>
            <Image
              objectFit="cover"
              width={widthImg}
              height={heightImg}
              src={icon}
            />
          </div>

          {anus === true ? (
            <SponsorTitleMobile title={title} description={description} />
          ) : (
            <span className={`${styles.title} ${styles[typeTextAlignLeft]}`}>
              {title}
            </span>
          )}
        </div>
        {anus === true ? (
          ""
        ) : (
          <div className={styles.body}>
            <p
              style={
                paddingBody === true && !mob870
                  ? { padding: "0 20px" }
                  : { padding: "0" }
              }
              className={`${styles.description}  ${styles[typeTextAlignLeft]}`}
            >
              {description}
            </p>
          </div>
        )}
      </a>
    </>}

    </>
  );
};

export default SquadCard;

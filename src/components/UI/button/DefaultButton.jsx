import React from "react";
import Icon from "../icon/Icon";
import styles from "./DefaultButton.module.scss";
import { useRouter } from "next/router";
const DefaultButton = ({
    children,
    onClick,
    width,
    type,
    props,
    icon,
    styleIcon,
    hrefLink,
    target,
    isTargetBlank,
}) => {
    const router = useRouter();

    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (isTargetBlank) {
            openInNewTab(hrefLink);
        } else {
            router.push(hrefLink);
        }
    };

    return (
        <>
            {hrefLink ? (
                <>
                    <a
                        onClick={(e) => (hrefLink ? handleClick(e) : onClick)}
                        className={styles[type]}
                        style={{
                            width,
                            ...props,
                        }}
                        target={target}
                        href={hrefLink}
                    >
                        <span
                            className={styles.text}
                            style={{ marginRight: icon ? "8px" : "0px" }}
                        >
                            {children}
                        </span>
                        {icon && <Icon src={icon} props={styleIcon} />}
                    </a>
                </>
            ) : (
                <>
                    <button
                        onClick={onClick}
                        className={styles[type]}
                        style={{
                            width,
                            ...props,
                        }}
                    >
                        <span
                            className={styles.text}
                            style={{ marginRight: icon ? "8px" : "0px" }}
                        >
                            {children}
                        </span>
                        {icon && <Icon src={icon} props={styleIcon} />}
                    </button>
                </>
            )}
        </>
    );
};

export default DefaultButton;

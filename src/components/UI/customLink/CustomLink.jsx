import { useRouter } from "next/router";
import React from "react";
import styles from "./CustomLink.module.scss";

const CustomLink = ({
    children,
    href,
    type = "default",
    isExternal = false,
    color = "#0672A8",
}) => {
    const router = useRouter();

    const handleClick = (e) => {
        if (href) {
            e.preventDefault();
            router.push(href);
        }
    };

    return (
        <>
            <a
                href={href}
                onClick={handleClick}
                className={styles[type]}
                style={{ color: color }}
            >
                {children}
            </a>
        </>
    );
};

export default CustomLink;

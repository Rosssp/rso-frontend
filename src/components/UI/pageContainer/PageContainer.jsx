import React from "react";
import styles from "./PageContainer.module.scss";

const PageContainer = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default PageContainer;

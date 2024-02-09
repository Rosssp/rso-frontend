import React from "react";
import styles from './container.module.scss'

const CustomContainer = (props) => {
  return (
    <>
      <div className={styles.container}>
        {props.children}
      </div>
    </>
  );
};

export default CustomContainer;

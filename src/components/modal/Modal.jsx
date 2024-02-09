import React from "react";
import Modal from "react-modal";
import styles from "./Modal.module.scss";
// import {closeRounded} from "../../constants/images";
import Image from "next/image";
import images from "../../constants/images";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    zIndex: "99",
    border: "0px solid transparent",
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'center',
    // margin: 'auto 0',
    gap: "20px",
    width: "100%",
    height: "100%",
    // maxWidth: "602px",
    // overflow: "hidden",
    // padding: "1rem",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(84, 119, 216, 0.8)",
    backdropFilter: "blur(5px)",
    overflow: "hidden",
    zIndex: "12",
  },
};

export default function CustomModal({
  isOpen = false,
  setIsOpen,
  children,
  title = "Связаться с нами",
}) {
  return (
    <Modal
      // className={styles.sadasd}
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Fullscreen form modal"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
    >
      <div className={styles.body}>
        <div className={styles.close} onClick={() => setIsOpen(false)}>
          <Image src={images.closeRounded} alt="Закрыть окно" />
        </div>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </Modal>
  );
}

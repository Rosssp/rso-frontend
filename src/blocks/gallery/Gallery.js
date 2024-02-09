import React, { useCallback, useRef, useState } from "react";
import images from "../../constants/images";
import DefaultButton from "../../components/UI/button/DefaultButton";
import styles from "./gar.module.scss";
import ImageViewer from "react-simple-image-viewer";
import Left from "./Left";
import Right from "./Right";
import Close from "./Close";

export default function Gallery({ bg = "transparent", buttonSrc, imagesGar }) {
    const ref = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        console.log(imagesGar, index);
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div style={{ position: "relative" }} ref={ref}>
            <div className={styles[bg]}>
                <div className={styles.gar_img__wrapper}>
                    {imagesGar?.map((item, index) => (
                        <div
                            style={{ cursor: "pointer" }}
                            className={styles[`gar__item_${index + 1}`]}
                            onClick={() => openImageViewer(index)}
                        >
                            <img src={item} />
                        </div>
                    ))}
                    {isViewerOpen && (
                        <ImageViewer
                            src={imagesGar}
                            currentIndex={currentImage}
                            disableScroll={false}
                            closeOnClickOutside={true}
                            onClose={closeImageViewer}
                            backgroundStyle={{
                                backgroundColor: "rgba(0,0,0,0.7)",
                            }}
                            leftArrowComponent={<Left />}
                            rightArrowComponent={<Right />}
                            closeComponent={<Close />}
                        />
                    )}
                </div>
            </div>
            {buttonSrc && (
                <div className={styles.gar__button__wrapper}>
                    <div className={styles.gar__button}>
                        <DefaultButton
                            type="blue"
                            icon={images.vkWhite}
                            width={278}
                            isTargetBlank
                            hrefLink={"https://vk.com/albums-10616834"}
                        >
                            Больше фотографий
                        </DefaultButton>
                    </div>
                </div>
            )}
        </div>
    );
}

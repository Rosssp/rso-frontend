import Image from "next/image";
import React from "react";
import images from "../../../constants/images";

export default function SliderIcons({ yellow }) {
    return (
        <>
            {/* <div className={"prev"}>
                <Image   src={images.Arrow} style={{ transform: "scale(-1)" }} />
            </div>
            <div className={"next"}>
                <Image   src={images.Arrow} />
            </div> */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "36px",
                }}
            >
                <div className={"bottom-prev"}>
                    <Image
                        src={images.Arrow}
                        style={{ transform: "scale(-1)" }}
                    />
                </div>
                {yellow ? (
                    <div className={"dots dots-yellow"}></div>
                ) : (
                    <div className={"dots"}></div>
                )}
                <div className={"bottom-next"}>
                    <Image   src={images.Arrow} />
                </div>
            </div>
        </>
    );
}

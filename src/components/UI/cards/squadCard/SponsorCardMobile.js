import React from "react";
import styles from "./SquadCard.module.scss";

export default function SponsorTitleMobile({ title, description }) {
    return (
        <div
            className={`
        ${styles.mobTitle}
         `}
        >
            <p
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                }}
            >
                {title}
                <span style={{ fontWeight: "400", fontSize: "16px" }}>
                    &nbsp; {description}
                </span>
            </p>
        </div>
    );
}

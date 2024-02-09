import React from "react";
import JobSlider from "../../components/jobSlider/JobSlider";
import Spacer from "../../components/UI/spacer/Spacer";
import WantToSign from "../../components/wantToSign/WantToSign";

export default function JobSliderLayout({ type, wts, education }) {
    return (
        <div style={{ backgroundColor: "#5477D8" }}>
            <div
                className="title"
                style={{
                    color: "white",
                }}
            >
                <Spacer size="lg" />
                Обучение
            </div>
            <JobSlider
                bottomColor={"#00EFD8"}
                type={type}
                education={education}
            />
            <Spacer size="md" />
            {wts === true && (
                <div style={{ padding: "0 14px" }}>
                    <WantToSign />
                </div>
            )}
            <Spacer size="xl" />
        </div>
    );
}

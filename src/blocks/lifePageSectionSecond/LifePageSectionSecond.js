import React, { useEffect, useRef, useState } from "react";
import Spacer from "../../components/UI/spacer/Spacer";

import animationStyles from "./animation.module.scss";
import { CSSTransition } from "react-transition-group";
import { useMount } from "../../hooks/useMounted";
import HideBlocks from "../../components/hideBlocks/HideBlocks";
import Vacancy from "../../components/vacancy/Vacancy";
import JobSliderLayout from "../jobSliderLayout/jobSliderLayout";
import Gallery from "../gallery/Gallery";
import SpacePossiblitities from "../../components/spacePossiblitities/SpacePossiblitities";
import SocialProjects from "../../components/socialProjects/SocialProjects";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function LifePageSectionSecond({
    openSecond,
    setOpenSecond,
    vacancy,
    education,
    style,
}) {
    const mob768 = useMediaQuery(768);
    const mounted = useMount(openSecond);
    const secondSection = useRef(null);

    const contentAnimation = {
        enter: animationStyles.contentEnter,
        enterActive: animationStyles.contentEnterActive,
        exit: animationStyles.contentExit,
        exitActive: animationStyles.contentExitActive,
    };

    const [animateSecond, setAnimateSecond] = useState(false);

    useEffect(() => {
        setAnimateSecond(() => openSecond);
    }, [openSecond]);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <CSSTransition
                in={animateSecond}
                nodeRef={secondSection}
                timeout={300}
                mountOnEnter
                unmountOnExit
                classNames={contentAnimation}
            >
                <div ref={secondSection} style={{ ...style }}>
                    <>
                        <Vacancy vacancy={vacancy} bottomColor={"#5477D8"} />
                        <JobSliderLayout
                            education={education}
                            wts={mob768 ? false : true}
                        />
                        <Gallery
                            imagesGar={[
                                "images/life/gallery/first.png",
                                "images/life/gallery/second.png",
                                "images/life/gallery/third.png",
                                "images/life/gallery/four.png",
                            ]}
                            buttonSrc="ss"
                        />
                        <SpacePossiblitities />
                        <Spacer size="sm" />
                        <SocialProjects />
                        <Spacer size="sm" />
                        <HideBlocks
                            onClick={() => {
                                setOpenSecond(false);
                                window.scrollTo(0, 0);
                            }}
                        />
                    </>
                </div>
            </CSSTransition>
        </>
    );
}

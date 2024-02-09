import React, { useEffect, useRef, useState } from "react";
import Spacer from "../../components/UI/spacer/Spacer";
import SmallNews from "../../components/smallNews/SmallNews";
import HeaderFullSlider from "../../components/fullSlider/FullSlider";
import HideBlocks from "../../components/hideBlocks/HideBlocks";

import animationStyles from "./animation.module.scss";
import { CSSTransition } from "react-transition-group";
import { useMount } from "../../hooks/useMounted";

export default function LifeFirstSection({
    open,
    setOpen,
    news,
    banner,
    style,
}) {
    const mounted = useMount(open);
    const firstSection = useRef(null);

    const contentAnimation = {
        enter: animationStyles.contentEnter,
        enterActive: animationStyles.contentEnterActive,
        exit: animationStyles.contentExit,
        exitActive: animationStyles.contentExitActive,
    };

    const [animateFrist, setAnimateFrist] = useState(false);

    useEffect(() => {
        setAnimateFrist(() => open);
    }, [open]);

    if (!mounted) {
        return null;
    }

    return (
        <CSSTransition
            in={animateFrist}
            nodeRef={firstSection}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames={contentAnimation}
        >
            <div ref={firstSection} style={{ ...style }}>
                <>
                    <Spacer size="sm" />
                    <SmallNews news={news} />
                    <Spacer size="sm" />
                    <HeaderFullSlider banner={banner} />
                    <HideBlocks
                        onClick={() => {
                            setOpen(false);
                            window.scrollTo(0, 0);
                        }}
                    />
                </>
            </div>
        </CSSTransition>
    );
}

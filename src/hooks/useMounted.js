import { useEffect, useState } from "react";

export const useMount = ({ opened }) => {
    const [mounted, setMounted] = useState(false);
    const ANIMATION_TIME = 1000;

    useEffect(() => {
        if (opened && !mounted) {
            setMounted(true);
        } else if (!opened && mounted) {
            setTimeout(() => {
                setMounted(false);
            }, ANIMATION_TIME);
        }
    }, [opened]);

    return {
        mounted,
    };
};

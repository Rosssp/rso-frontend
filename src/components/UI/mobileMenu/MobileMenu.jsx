import Image from "next/image";
import React from "react";
import style from "./MobileMenu.module.scss";
import animationStyles from "./animation.module.scss";
import images from "../../../constants/images";
import { CSSTransition } from "react-transition-group";
import { useMount } from "../../../hooks/useMounted";
import { useRouter } from "next/router";

const MobileMenu = ({ isOpen, list, setIsMenuOpen }) => {
  const mounted = useMount(isOpen);
  const menuRef = React.useRef(null);
  const router = useRouter();

  const contentAnimation = {
    enter: animationStyles.contentEnter,
    enterActive: animationStyles.contentEnterActive,
    exit: animationStyles.contentExit,
    exitActive: animationStyles.contentExitActive,
  };

  const [animationIn, setAnimationIn] = React.useState(false);

  React.useEffect(() => {
    setAnimationIn(isOpen);
  }, [isOpen]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    router.push(href);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <CSSTransition
        in={animationIn}
        nodeRef={menuRef}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={menuRef} className={style.wrapper}>
          <div className={style.container}>
            <div className={style.list}>
              {list.map((item, index) => (
                <a
                  onClick={(e) => handleClick(e, item.link)}
                  className={style.link}
                  href={item.link}
                  key={index}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div className={style.social}>
              <a
                className={style.item}
                target="_blank"
                href="https://vk.com/rsosamara"
              >
                <Image
                  alt="vk social"
                  src={images.vkBlue}
                  width={44}
                  height={44}
                />
              </a>
              <a
                className={style.item}
                target="_blank"
                href="https://t.me/samro_rso"
              >
                <Image
                  alt="tg social"
                  src={images.tgBlue}
                  width={44}
                  height={44}
                />
              </a>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default MobileMenu;

import React from "react";

import styles from "./header.module.scss";
import ActiveLink from "./ActiveLink";
import Image from "next/image";

import rso from "../../../assets/logos/rso.svg";
import studSamara from "../../../assets/logos/studSamara.svg";
import MobileMenu from "../mobileMenu/MobileMenu";
import images from "../../../constants/images";
import { useRouter } from "next/router";

function Header() {
  const routesList = [
    { link: "/", title: "Главная" },
    { link: "/join", title: "Хочу вступить" },
    { link: "/life", title: "Жизнь в РСО" },
    { link: "/collaborate", title: "Хочу сотрудничать" },
    { link: "/about", title: "О нас" },
    { link: "/parents", title: "Родителям" },
    { link: "/training", title: "Обучения" },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__brand} onClick={()=>router.push('/')}>
            <div className={styles.header__logo}>
              <Image
                src={studSamara}
                width={113.13}
                height={48}
                quality={100}
              />
            </div>
            <div className={styles.header__logo}>
              <Image src={rso} width={48} height={48} quality={100} />
            </div>
          </div>
          <div className={styles.header__mobile_title}>
            Студенческие отряды <br /> Самарской области
          </div>
          <div
            className={styles.header__mobile_toggle}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span
              class={
                isMenuOpen
                  ? styles.header__mobile_line1_active
                  : styles.header__mobile_line1
              }
            />
            <span
              class={
                isMenuOpen
                  ? styles.header__mobile_line2_active
                  : styles.header__mobile_line2
              }
            />
            <span
              class={
                isMenuOpen
                  ? styles.header__mobile_line3_active
                  : styles.header__mobile_line3
              }
            />
          </div>
          <div className={styles.header__links}>
            <ul className={styles.header__list}>
              {routesList.map((item, index) => (
                <>
                  <li className={styles.header__link} key={index}>
                    <ActiveLink href={item.link}>{item.title}</ActiveLink>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.social__links}>
          <div className={styles.social__list}>
            <a className={styles.social__item} target="_blank" href="https://vk.com/rsosamara">
              <Image src={images.vkBlue} width={32} height={32} />
            </a>
            <a className={styles.social__item} target="_blank" href="https://t.me/samro_rso">
              <Image src={images.tgBlue} width={32} height={32} />
            </a>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMenuOpen}
        list={routesList}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
}

export default Header;

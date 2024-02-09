import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import fun from "../../../../public/images/fun.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";
import images from "../../../constants/images";

const Footer = ({ nav, footerColor = "transparent" }) => {
  const MobileFooter = () => {
    return (
      <>
        <div className={styles[`footer_bg_${footerColor}`]}>
          <div className={styles.footer}>
            <div className={styles.mobile_wrapper}>
              <div className={styles.mobile_header}>
                <div className={styles.mobile_header_logo}>
                  <Image src={images.rsoColored} width={100} height={104} />
                </div>
                <div className={styles.mobile_header_title}>
                  Самарское региональное отделение Молодежной общероссийской
                  общественной организации "Российские Студенческие Отряды"
                </div>
              </div>
              <div className={styles.mobile_body}>
                <div className={styles.mobile_phone}>
                  <div className={styles.mobile_phone_icon}>
                    <Image src={images.phone} width={29} height={29} />
                  </div>
                  <span
                    className={styles.mobile_phone_title}
                    style={{ marginBottom: "10px" }}
                  >
                    Телефон
                  </span>

                  <a
                    className={styles.mobile_phone_number}
                    href="tel:+78462026082"
                  >
                    +7 (846) 202-60-82
                  </a>
                </div>
                <div className={styles.mobile_social_list}>
                  <a
                    className={styles.mobile_social_icon}
                    target="_blank"
                    href="https://vk.com/rsosamara"
                  >
                    <Image src={images.vkBlue} width={44} height={44} />
                  </a>
                  <a
                    className={styles.mobile_social_icon}
                    target="_blank"
                    href="https://t.me/samro_rso"
                  >
                    <Image src={images.tgBlue} width={44} height={44} />
                  </a>
                </div>
                <div className={styles.mobile_ext_list}>
                  <a
                    className={styles.mobile_ext_item}
                    target="_blank"
                    href="https://xn--d1amqcgedd.xn--p1ai/"
                  >
                    <div className={styles.mobile_ext_image}>
                      <Image src={images.rsoblue} width={43} height={43} />
                    </div>
                    <div className={styles.mobile_ext_title}>
                      Центральный штаб РСО
                    </div>
                  </a>
                  <a
                    className={styles.mobile_ext_item}
                    target="_blank"
                    href="https://trudkrutshop.ru/"
                  >
                    <div className={styles.mobile_ext_image}>
                      <Image src={images.trudLogo} width={43} height={43} />
                    </div>
                    <div className={styles.mobile_ext_title}>
                      Магазин отрядного мерча
                    </div>
                  </a>
                </div>
                <div className={styles.mobile_legal}>
                  <ul className={styles.info_list}>
                    <li className={styles.info_item}>ОГРН 1156313039134</li>
                    <li className={styles.info_item}>
                      ИНН 6318006647, КПП 631601001
                    </li>
                    <li className={styles.info_item}>
                      р/с 40703810654400000678
                    </li>
                    <li className={styles.info_item}>
                      Банк: Поволжский банк ПАО Сбербанк России
                    </li>
                  </ul>
                  <a
                    className={styles.adress}
                    target="_blank"
                    href="https://yandex.ru/maps/51/samara/house/prospekt_maslennikova_37/YUkYdwJpSEwCQFtpfX5xdnRgYg==/inside/?ll=50.159540%2C53.207878&tab=inside&z=18.6"
                  >
                    Адрес: 443056 Самарская обл, г. Самара, пр-кт Масленникова
                    д.37
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const DesktopFooter = () => {
    return (
      <>
        <div className={styles[`footer_bg_${footerColor}`]}>
          <div className={styles.footer}>
            <div className={styles.footer__container}>
              <div className={styles.footer__side}>
                <div className={styles.footer__side_left}>
                  <div className={styles.wrapper_left}>
                    <div className={styles.row}>
                      <div className={styles.image_wrapper}>
                        <Image src={images.rsoColored} width={80} height={84} />
                      </div>
                      <div className={styles.header_right}>
                        <span className={styles.title}>
                          Самарское региональное отделение Молодежной
                          общероссийской общественной организации "Российские
                          Студенческие Отряды"
                        </span>

                        <ul className={styles.info_list}>
                          <li className={styles.info_item}>
                            ОГРН 1156313039134
                          </li>
                          <li className={styles.info_item}>
                            ИНН 6318006647, КПП 631601001
                          </li>
                          <li className={styles.info_item}>
                            р/с 40703810654400000678
                          </li>
                          <li className={styles.info_item}>
                            Банк: Поволжский банк ПАО Сбербанк России
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.image_wrapper}>
                        <Image src={images.geo} width={48} height={48} />
                      </div>
                      <a
                        className={styles.adress}
                        target="_blank"
                        href="https://yandex.ru/maps/51/samara/house/prospekt_maslennikova_37/YUkYdwJpSEwCQFtpfX5xdnRgYg==/inside/?ll=50.159540%2C53.207878&tab=inside&z=18.6"
                      >
                        Адрес: 443056 Самарская обл, г. Самара, пр-кт
                        Масленникова д.37
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer__side}>
                <div className={styles.footer__side_right}>
                  <div className={styles.left_wrapper}>
                    <a
                      className={styles.link_card}
                      target="_blank"
                      href="https://trudkrutshop.ru/"
                    >
                      <div className={styles.link_card_image}>
                        <Image src={images.trudLogo} width={48} height={48} />
                      </div>
                      <div className={styles.link_card_title}>
                        Магазин отрядного мерча
                      </div>
                    </a>
                    <a
                      className={styles.link_card}
                      target="_blank"
                      href="https://xn--d1amqcgedd.xn--p1ai/"
                    >
                      <div className={styles.link_card_image}>
                        <Image src={images.rsoblue} width={48} height={48} />
                      </div>
                      <div className={styles.link_card_title}>
                        Центральный штаб РСО
                      </div>
                    </a>
                  </div>
                  <div className={styles.right_wrapper}>
                    <div className={styles.phone}>
                      <div className={styles.phone_image}>
                        <Image src={images.phone} width={48} height={48} />
                      </div>
                      <div className={styles.phone_title}>Телефон:</div>
                      <a
                        className={styles.phone_number}
                        href="tel:+78462026082"
                      >
                        8 (846) 202-60-82
                      </a>
                      <div className={styles.social_list}>
                        <a
                          className={styles.social_icon}
                          target="_blank"
                          href="https://vk.com/rsosamara"
                        >
                          <Image src={images.vkBlue} width={44} height={44} />
                        </a>
                        <a
                          className={styles.social_icon}
                          target="_blank"
                          href="https://t.me/samro_rso"
                        >
                          <Image src={images.tgBlue} width={44} height={44} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const media425 = useMediaQuery(425);

  return <>{media425 ? <MobileFooter /> : <DesktopFooter />}</>;
};

export default Footer;

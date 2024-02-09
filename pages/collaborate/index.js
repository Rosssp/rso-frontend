import Image from "next/image";
import React from "react";
import WantCooperateBlock from "../../src/components/WantCooperateBlock/WantCooperateBlock";
import images from "../../src/constants/images";
import styles from "./collaborate.module.scss";
import Spacer from "../../src/components/UI/spacer/Spacer";
import CooperateCard from "../../src/components/CooperateCard/CooperateCard";
import SponsorLayout from "../../src/blocks/sponsorLayout/SponsorLayout";
import SponsorLayoutSlider from "../../src/blocks/sponsorLayoutSlider/SponsorLayoutSlider";
import fetchersService from "../../services/fetchers.service";
import Head from "next/head";

export default function Collaborate({ mainPageSliders }) {
  const gta6 = [
    {
      id: "1",
      src: images.coll2,
      title:
        "Получать квалифицированных специалистов на сезонные работы разного профиля.",
      text: "Подбор, обучение персонала и все организационные вопросы (в том числе  организация медосмотра, сбор документов для трудоустройства) мы берем на себя. У каждого направления студенческих отрядов  есть свой куратор, который поможет оперативно решить все возникающие вопросы.",
      order: 3,
    },
    {
      id: "2",
      src: images.coll3,
      title: "Сэкономить на налоговых вычетах. ",
      text: "Компании, предоставляющие рабочие места членам Российских Студенческих Отрядов освобождаются от взносов 22% в пенсионный фонд РФ.",
      order: 3,
    },
    {
      id: "3",
      src: images.coll1,
      title: "Сформировать себе кадровый резерв из проверенных ребят.",
      text: "Довольно частая практика - когда студенческие отряды, приехавшие на сезонные работы, приезжают несколько лет подряд в одну и ту же компанию, а после выпуска из образовательной организации становятся полноценными ее сотрудниками.",
      order: 2,
    },
  ];

  return (
    <>
      <Head>
        <title>Сотрудничество - РСО</title>
        <meta name="webjox" content="monitoring" />

        <meta
          name="description"
          content="Официальная страница Российских студенческих отрядов"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.collaborate}>
          <div className={styles.background}>
            <div className={styles.bg_image}>
              <Image src={images.banner2} />
            </div>
            <div className={styles.bg_transparent}></div>
          </div>

          <div className={styles.body}>
            <Spacer size="sm" />
            <h2 className={styles.block_title}>Сотрудничество</h2>
            <Spacer size="md" />
            <div className={styles.body_list}>
              {gta6.map((item) => (
                <>
                  <CooperateCard
                    img={item.src}
                    title={item.title}
                    text={item.text}
                    cardOrder={item?.order}
                  />
                </>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.quote}>
          Вам остается только начать с нами сотрудничать и <br /> добросовестно
          выполнять свои обязательства.
        </div>
        <Spacer size="sm" />

        <SponsorLayoutSlider
          title="С нами уже работают"
          // studentsWorked={withUsSlider.already_with_us_slider}
          studentsWorked={mainPageSliders}
        />

        <Spacer size="xs" />
        <div id="Coop"></div>
        <WantCooperateBlock />
      </div>
      <Spacer size="md" />
    </>
  );
}

export async function getServerSideProps() {
  // const studentsWorked = await fetchersService
  //   .getAll("our-students/")
  //   .then(({ data }) => {
  //     let result = [];
  //     data.our_students.map((item) => {
  //       const renamed = ({ image, title }) => ({
  //         logo: image,
  //         name: title,
  //       });
  //       result.push(renamed(item));
  //     });
  //     return result;
  //   });

  // const withUsSlider = await fetchersService
  //   .getAll("with-us-slider/")
  //   .then(({ data }) => {
  //     return data;
  //   });

  const mainPageSliders = await fetchersService
    .getAll("work_with_us_slider/")
    .then(({ data }) => {
      let result = [];
      data.slider.map((item) => {
        const renamed = ({ image, name }) => ({
          logo: image,
          name: name,
        });
        result.push(renamed(item));
      });
      return result;
    });

  return {
    props: {
      mainPageSliders,
    },
  };
}

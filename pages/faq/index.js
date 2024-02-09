import Head from "next/head";
import React from "react";
import fetchersService from "../../services/fetchers.service";
import FaqLayout from "../../src/blocks/FAQLayout/FaqLayout";
import styles from "./index.module.scss";

export default function index({ faq }) {
  return (
    <>
      <Head>
        <title>Частые вопросы</title>
        <meta name="webjox" content="monitoring" />

        <meta
          name="description"
          content="Официальная страница Российских студенческих отрядов"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <FaqLayout documentsBtn={true} type="FAQpage" faq={faq} slice={false} />
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const faq = await fetchersService.getAll("faq").then(({ data }) => {
    return data;
  });

  return {
    props: {
      faq,
    },
  };
}

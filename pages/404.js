import React from "react";
import { useRouter } from "next/router";
import Spacer from "../src/components/UI/spacer/Spacer";
import ActiveLink from "../src/components/UI/header/ActiveLink";
import Head from "next/head";
import images from "../src/constants/images";

const errorPage = ({}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Ой! Страница отсутствует</title>
      </Head>
      <Spacer size="md" />
      <Spacer size="xl" />
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
          fontFamily: "Bebas Neue",
          fontWeight: "400",
          fontSize: "54px",
          lineHeight: "130%",
          textAlign: "center",
          color: "#2b3a65",
        }}
      >
        Ой!
        <br /> Этой страницы не существует. <br />
        <ActiveLink href={"/"}>Вернуться на главную</ActiveLink>
      </div>
    </>
  );
};

export default errorPage;

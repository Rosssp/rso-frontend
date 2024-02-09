import Footer from "../src/components/UI/footer/Footer";
import Header from "../src/components/UI/header/Header";
import Head from "next/head";
import "../src/App.scss";
import CustomContainer from "../src/components/UI/container/Container";
import PageContainer from "../src/components/UI/pageContainer/PageContainer";
import { useRouter } from "next/router";
import React from "react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import images from "../src/constants/images";

function MyApp({ Component, pageProps }) {
    const pagesWithBlueFooter = ["/payment"];

    const router = useRouter();
    return (
        <>
            <Head>
                <title>Российские студенческие отряды</title>
                <meta name="webjox" content="monitoring" />

                <meta
                    name="description"
                    content="Официальная страница Российских студенческих отрядов"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <CustomContainer>
                <PageContainer>
                    <Header />
                    <div className="main__wrapper">
                        <Component {...pageProps} />
                    </div>
                    <Footer
                        footerColor={
                            pagesWithBlueFooter.includes(router.pathname)
                                ? "blue"
                                : "transparent"
                        }
                    />
                </PageContainer>
            </CustomContainer>
        </>
    );
}

export default MyApp;

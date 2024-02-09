import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import fetchersService from "../../../services/fetchers.service";
import NewsListPreview from "../../../src/components/newsListPreview/NewsListPreview";
import Spacer from "../../../src/components/UI/spacer/Spacer";
import images from "../../../src/constants/images";

import styles from "./index.module.scss";

export default function SingleNews({ post, posts }) {
    const router = useRouter();
    const dateFormater = (date) => {
        return date.split("-").reverse().join(".");
    };
    return (
        <>
            <Head>
                <title>{post.title}</title>
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
            </Head>
            <Spacer size="md" />
            <Spacer size="xl" />
            <div className={styles.container}>
                <div className={styles.news}>
                    <div className={styles.news__content}>
                        <div className={styles.news_header}>
                            <span className={styles.date}>
                                {dateFormater(post.date_of_creation)}
                            </span>
                        </div>

                        <div className={styles.news_body}>
                            <div className={styles.news_image}>
                                <Image
                                    // style={{ position: "absolute" }}
                                    src={
                                        process.env.NEXT_PUBLIC_MEDIA +
                                        "/" +
                                        post.image
                                    }
                                    objectFit="cover"
                                    width={500}
                                    height={0}
                                    alt={post.title}
                                />
                            </div>
                            <div className={styles.news_title}>
                                <p>{post.title}</p>
                            </div>
                            <div className={styles.news_content}>
                                <div
                                    className={styles.news_text}
                                    dangerouslySetInnerHTML={{
                                        __html: `${post.full_text}`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.recent}>
                    <h1 className={styles.NewsListPreview__title}>
                        Другие новости
                    </h1>
                    <div className={styles.recent_list}>
                        <NewsListPreview posts={posts} />
                        <div className={styles.NewsListPreview__gradient} />
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const post = await fetchersService
        .get("life_rso", params.slug)
        .then(({ data }) => {
            return data;
        });

    const posts = await fetchersService.getAll("life_rso").then(({ data }) => {
        return data.slice(0, 4);
    });
    return {
        props: {
            post,
            posts,
        },
    };
}

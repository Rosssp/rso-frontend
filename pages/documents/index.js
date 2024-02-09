import Image from "next/image";
import React from "react";
import fetchersService from "../../services/fetchers.service";
import images from "../../src/constants/images";
import styles from "./index.module.scss";
export default function Documents({ documents }) {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Документы</h1>
            <div className={styles.container}>
                {documents.map((item) => (
                    <div className={styles.item__container}>
                        <div className={styles.text}>{item.filename}</div>
                        <a
                            className={styles.doc}
                            href={`${process.env.NEXT_PUBLIC_MEDIA}/${item.file}`}
                            target="__blank"
                            download
                        >
                            <Image src={images.doc} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const documents = await fetchersService.getAll("files").then(({ data }) => {
        return data;
    });

    return {
        props: {
            documents,
        },
    };
}

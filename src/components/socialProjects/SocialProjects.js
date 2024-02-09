import React from "react";
import BenefitCard from "../UI/cards/benefitCard/BenefitCard";
import Spacer from "../UI/spacer/Spacer";
import styles from "./SocialProjects.module.scss";
import fetchersService from "../../../services/fetchers.service";

export default function SocialProjects() {
    const [socialProjects, setSocialProjects] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const response = await fetchersService
                .getAll("social-projects")
                .then(({ data }) => {
                    return data;
                })
                .catch(() => {
                    return [];
                });
            setSocialProjects(response);

            setLoading(false);
        };

        loadPost();
    }, []);
    return (
        <>
            <h1 className="title">Социальные проекты</h1>
            <Spacer size="md" />
            {!loading && (
                <div className={styles.sp__container}>
                    {socialProjects.map((item) => (
                        <div className={styles.sp__card} key={item.id}>
                            <BenefitCard
                                type="lifePage"
                                title={item.title}
                                description={
                                    item.description.slice(0, 150) + "..."
                                }
                                size="life"
                                icon={`${process.env.NEXT_PUBLIC_MEDIA}/${item.icon}`}
                                href={`/social-projects/${item.slug}`}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

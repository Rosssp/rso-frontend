import React from "react";
import styles from "./FindHeadquarters.module.scss";
import InputSelect from "../../components/UI/select/InputSelect";
import Image from "next/image";
import images from "../../constants/images";
import fetchersService from "../../../services/fetchers.service";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import FindHeadquartersList from "./FindHeadquartersList";

const FindHeadquarters = () => {
    const [hqlist, setHqlist] = React.useState([]);
    const [filtredHqlist, setFiltredHqlist] = React.useState([]);
    const [isSearched, setIsSearched] = React.useState(false);

    const [typeslist, setTypeslist] = React.useState([]);
    const [citiesList, setCitiesList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const [citiesValue, setCitiesValue] = React.useState("");
    const [typesValue, setTypesValue] = React.useState("");

    React.useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const response = await fetchersService
                .getAll("headquarters")
                .then(({ data }) => {
                    return data;
                });
            const types = await fetchersService
                .getAll("institution-types")
                .then(({ data }) => {
                    let result = [];
                    data.map((item) => {
                        const renamed = ({ type }) => ({
                            label: type,
                            value: type,
                        });
                        result.push(renamed(item));
                    });
                    return result;
                });
            const cities = await fetchersService
                .getAll("cities")
                .then(({ data }) => {
                    let result = [];
                    data.map((item) => {
                        const renamed = ({ city }) => ({
                            label: city,
                            value: city,
                        });
                        result.push(renamed(item));
                    });
                    return result;
                });
            setHqlist(response);
            setTypeslist(types);
            setCitiesList(cities);

            setLoading(false);
        };

        loadPost();
    }, []);

    const filterSourceArray = () => {
        setFiltredHqlist([]);

        if (!!citiesValue && !typesValue) {
            setFiltredHqlist(
                hqlist.filter((item) => {
                    return item.city.city === citiesValue;
                })
            );
            setIsSearched(true);
        }

        if (!!typesValue && !citiesValue) {
            setFiltredHqlist(
                hqlist.filter((item) => {
                    return item.Institution_type.type === typesValue;
                })
            );
            setIsSearched(true);
        }

        if (!!typesValue && !!citiesValue) {
            setFiltredHqlist(
                hqlist.filter((item) => {
                    return (
                        item.Institution_type.type === typesValue &&
                        item.city.city === citiesValue
                    );
                })
            );
            setIsSearched(true);
        }

        if (!!!typesValue && !!!citiesValue) {
            setFiltredHqlist(
                hqlist.filter((item) => {
                    return (
                        item.Institution_type.type === typesValue &&
                        item.city.city === citiesValue
                    );
                })
            );
            setIsSearched(false);
        }
    };

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>НАЙДИ СВОЙ ШТАБ</h1>
                {loading ? (
                    <LoadingIcon />
                ) : (
                    <>
                        <div className={styles.form}>
                            <div className={styles.form_header}>
                                <InputSelect
                                    placeholder="Город"
                                    values={citiesList}
                                    getValue={setCitiesValue}
                                />
                                <InputSelect
                                    placeholder="Учебное заведение"
                                    values={typeslist}
                                    getValue={setTypesValue}
                                />
                                <button
                                    type="button"
                                    className={styles.form_send}
                                    onClick={() => filterSourceArray()}
                                >
                                    <Image
                                        src={images.search}
                                        alt="Кнопка поиска"
                                    />
                                </button>
                            </div>

                            <div className={styles.form_body}>
                                {isSearched && !filtredHqlist.length ? (
                                    <p className={styles.noResult}>
                                        Ничего не нашлось. <br /> Но ты можешь
                                        написать нам и мы вместе подберем
                                        подходящий
                                    </p>
                                ) : (
                                    <></>
                                )}

                                <FindHeadquartersList
                                    list={
                                        isSearched
                                            ? filtredHqlist
                                            : hqlist.filter(
                                                  (item) =>
                                                      item.display_by_default
                                              )
                                    }
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default FindHeadquarters;

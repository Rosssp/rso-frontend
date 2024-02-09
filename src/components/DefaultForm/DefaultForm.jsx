import React from "react";
import styles from "./DefaultForm.module.scss";
import { Formik, Field, Form } from "formik";
import InputSelect from "../UI/select/InputSelect";
import fetchersservice from "../../../services/fetchers.service";
import httpCommon from "../../../http-common";
import * as Yup from "yup";
import squad from "../../constants/squad";
import LoadingIcon from "../UI/LoadingIcon/LoadingIcon";

const DefaultForm = ({ type, formInitialValues, modal__info }) => {
    const [isAccepted, setIsAccepted] = React.useState(false);
    const [hqlist, setHqlist] = React.useState([]);
    const [jobsList, setJobsList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    // const phoneRegExp2 =
    //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    // const phoneRegExp = /^(([8]{1}|[+7]{2})[0-9]{10})?$/;

    React.useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const response = await fetchersservice
                .getAll("headquarters")
                .then(({ data }) => {
                    let result = [];
                    data.map((item) => {
                        const renamed = ({ name, id }) => ({
                            label: name,
                            value: id,
                        });
                        result.push(renamed(item));
                    });
                    return result;
                });
            const jobsResponse = await fetchersservice
                .getAll("vacancy")
                .then(({ data }) => {
                    let result = [];
                    data.map((item) => {
                        const renamed = ({ title, id }) => ({
                            value: id,
                            label: title,
                        });
                        result.push(renamed(item));
                    });
                    return result;
                });
            setHqlist(response);
            setJobsList(jobsResponse);

            setLoading(false);
        };

        loadPost();
    }, []);

    switch (type) {
        case "work":
            return (
                <>
                    <div className={styles.formik_container}>
                        {loading ? (
                            <LoadingIcon />
                        ) : (
                            <Formik
                                initialValues={
                                    formInitialValues
                                        ? formInitialValues
                                        : {
                                              vacancy_id: null,
                                              full_name: "",
                                              phone_number: "",
                                              email: "",
                                              communication_method: "",
                                              organization: "",
                                              processed: false,
                                          }
                                }
                                onSubmit={async (
                                    values,
                                    { setSubmitting, resetForm }
                                ) => {
                                    await httpCommon
                                        .post("want-work/", values)
                                        .then((response) => {
                                            if (
                                                response.status === 200 ||
                                                response.status === 201
                                            ) {
                                                setIsAccepted(true);
                                                resetForm(
                                                    formInitialValues
                                                        ? formInitialValues
                                                        : {
                                                              vacancy_id: null,
                                                              full_name: "",
                                                              phone_number: "",
                                                              email: "",
                                                              communication_method:
                                                                  "",
                                                              organization: "",
                                                              processed: false,
                                                          }
                                                );
                                            }
                                        });
                                }}
                                validationSchema={Yup.object({
                                    full_name: Yup.string()
                                        .max(
                                            512,
                                            "Убедитесь, что поле содержит не более 512 символов."
                                        )
                                        .required("Обязательное поле"),
                                    vacancy_id: Yup.number().max(
                                        512,
                                        "Убедитесь, что поле содержит не более 512 символов."
                                    ),
                                    phone_number: Yup.string()
                                        .max(
                                            20,
                                            "Убедитесь, что номер содержит не более 20 символов."
                                        )

                                        .required("Обязательное поле"),
                                    organization: Yup.string().max(
                                        512,
                                        "Убедитесь, что поле содержит не более 512 символов."
                                    ),
                                })}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    setFieldValue,
                                }) => {
                                    return (
                                        <>
                                            <Form className={styles.formik}>
                                                <Field
                                                    id="full_name"
                                                    name="full_name"
                                                    placeholder="Фамилия имя *"
                                                    className={
                                                        styles.formik__input
                                                    }
                                                />
                                                {errors.full_name &&
                                                touched.full_name ? (
                                                    <div
                                                        className={
                                                            styles.formik_error
                                                        }
                                                    >
                                                        {errors.full_name}
                                                    </div>
                                                ) : null}
                                                <div
                                                    className={
                                                        styles.formik__selects
                                                    }
                                                >
                                                    {jobsList.length ? (
                                                        <InputSelect
                                                            placeholder="Вакансия *"
                                                            fieldName={
                                                                "vacancy_id"
                                                            }
                                                            defaultValue={jobsList.findIndex(
                                                                (item) =>
                                                                    item.value ===
                                                                    formInitialValues.vacancy_id
                                                            )}
                                                            values={jobsList}
                                                            getValue={
                                                                setFieldValue
                                                            }
                                                        />
                                                    ) : (
                                                        <LoadingIcon />
                                                    )}
                                                </div>
                                                <Field
                                                    id="phone_number"
                                                    name="phone_number"
                                                    placeholder="Контактный телефон *"
                                                    className={
                                                        styles.formik__input
                                                    }
                                                />
                                                {errors.phone_number &&
                                                touched.phone_number ? (
                                                    <div
                                                        className={
                                                            styles.formik_error
                                                        }
                                                    >
                                                        {errors.phone_number}
                                                    </div>
                                                ) : null}

                                                <div
                                                    className={
                                                        styles.formik__selects
                                                    }
                                                >
                                                    <InputSelect
                                                        placeholder="Удобный способ связи *"
                                                        fieldName={
                                                            "communication_method"
                                                        }
                                                        values={[
                                                            {
                                                                value: "Phone",
                                                                label: "Звонок",
                                                            },
                                                            {
                                                                value: "Telegram",
                                                                label: "Telegram",
                                                            },
                                                            {
                                                                value: "Whatsapp",
                                                                label: "Whatsapp",
                                                            },
                                                            {
                                                                value: "Viber",
                                                                label: "Viber",
                                                            },
                                                        ]}
                                                        getValue={setFieldValue}
                                                    />
                                                </div>
                                                <Field
                                                    id="organization"
                                                    name="organization"
                                                    placeholder="Образовательная организация"
                                                    className={
                                                        styles.formik__input
                                                    }
                                                />
                                                {errors.organization &&
                                                touched.organization ? (
                                                    <div
                                                        className={
                                                            styles.formik_error
                                                        }
                                                    >
                                                        {errors.organization}
                                                    </div>
                                                ) : null}
                                                <button
                                                    className={
                                                        styles.formik__button
                                                    }
                                                    type="submit"
                                                >
                                                    Хочу работать
                                                </button>

                                                {isAccepted && (
                                                    <div
                                                        className={
                                                            styles.formik_accepted
                                                        }
                                                    >
                                                        Ваша заявка успешно
                                                        отправлена
                                                    </div>
                                                )}
                                            </Form>
                                        </>
                                    );
                                }}
                            </Formik>
                        )}
                    </div>
                </>
            );
        case "join":
            return (
                <>
                    {modal__info && (
                        <p className={styles.formik__info}>{modal__info}</p>
                    )}
                    <div className={styles.formik_container}>
                        {loading ? (
                            <LoadingIcon />
                        ) : (
                            <Formik
                                initialValues={
                                    formInitialValues
                                        ? formInitialValues
                                        : {
                                              full_name: "",
                                              phone_number: "",
                                              communication_method: "",
                                              direction: "",
                                              headquarter: "",
                                          }
                                }
                                onSubmit={async (
                                    values,
                                    { setSubmitting, resetForm }
                                ) => {
                                    await httpCommon
                                        .post("want-join/", values)
                                        .then((response) => {
                                            if (
                                                response.status === 200 ||
                                                response.status === 201
                                            ) {
                                                setIsAccepted(true);
                                                resetForm(
                                                    formInitialValues
                                                        ? formInitialValues
                                                        : {
                                                              full_name: "",
                                                              phone_number: "",
                                                              communication_method:
                                                                  "",
                                                              direction: "",
                                                              headquarter: "",
                                                          }
                                                );
                                            }
                                        });
                                }}
                                validationSchema={Yup.object({
                                    full_name: Yup.string()
                                        .max(
                                            512,
                                            "Убедитесь, что поле содержит не более 512 символов."
                                        )
                                        .required("Обязательное поле"),
                                    phone_number: Yup.string()
                                        .max(
                                            20,
                                            "Убедитесь, что номер содержит не более 20 символов."
                                        )

                                        .required("Обязательное поле"),
                                    communication_method:
                                        Yup.string().required(
                                            "Обязательное поле"
                                        ),
                                })}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    setFieldValue,
                                }) => {
                                    return (
                                        <>
                                            <Form className={styles.formik}>
                                                <Field
                                                    id="full_name"
                                                    name="full_name"
                                                    placeholder="Фамилия имя *"
                                                    className={
                                                        styles.formik__input_req
                                                    }
                                                />
                                                {errors.full_name &&
                                                touched.full_name ? (
                                                    <div
                                                        className={
                                                            styles.formik_error
                                                        }
                                                    >
                                                        {errors.full_name}
                                                    </div>
                                                ) : null}
                                                <Field
                                                    id="phone_number"
                                                    name="phone_number"
                                                    placeholder="Контактный телефон *"
                                                    className={
                                                        styles.formik__input
                                                    }
                                                />
                                                {errors.phone_number &&
                                                touched.phone_number ? (
                                                    <div
                                                        className={
                                                            styles.formik_error
                                                        }
                                                    >
                                                        {errors.phone_number}
                                                    </div>
                                                ) : null}
                                                <div
                                                    className={
                                                        styles.formik__selects
                                                    }
                                                >
                                                    <InputSelect
                                                        placeholder="Удобный способ связи *"
                                                        fieldName={
                                                            "communication_method"
                                                        }
                                                        values={[
                                                            {
                                                                value: "Phone",
                                                                label: "Звонок",
                                                            },
                                                            {
                                                                value: "Telegram",
                                                                label: "Telegram",
                                                            },
                                                            {
                                                                value: "Whatsapp",
                                                                label: "Whatsapp",
                                                            },
                                                            {
                                                                value: "Viber",
                                                                label: "Viber",
                                                            },
                                                        ]}
                                                        getValue={setFieldValue}
                                                    />
                                                </div>

                                                <button
                                                    className={
                                                        styles.formik__button
                                                    }
                                                    type="submit"
                                                >
                                                    Вступить в РСО
                                                </button>

                                                {isAccepted && (
                                                    <div
                                                        className={
                                                            styles.formik_accepted
                                                        }
                                                    >
                                                        Ваша заявка успешно
                                                        отправлена
                                                    </div>
                                                )}
                                            </Form>
                                        </>
                                    );
                                }}
                            </Formik>
                        )}
                    </div>
                </>
            );
        case "cooperate":
            return (
                <>
                    <div className={styles.formik_container}>
                        <Formik
                            initialValues={
                                formInitialValues
                                    ? formInitialValues
                                    : {
                                          full_name: "",
                                          company_name: "",
                                          phone_number: "",
                                      }
                            }
                            onSubmit={async (
                                values,
                                { setSubmitting, resetForm }
                            ) => {
                                await httpCommon
                                    .post("want-cooperate/", values)
                                    .then((response) => {
                                        if (
                                            response.status === 200 ||
                                            response.status === 201
                                        ) {
                                            setIsAccepted(true);
                                            resetForm(
                                                formInitialValues
                                                    ? formInitialValues
                                                    : {
                                                          full_name: "",
                                                          company_name: "",
                                                          phone_number: "",
                                                      }
                                            );
                                        }
                                    });
                            }}
                            validationSchema={Yup.object({
                                full_name: Yup.string()
                                    .max(
                                        512,
                                        "Убедитесь, что поле содержит не более 512 символов."
                                    )
                                    .required("Обязательное поле"),
                                phone_number: Yup.string()
                                    .max(
                                        20,
                                        "Убедитесь, что номер содержит не более 20 символов."
                                    )

                                    .required("Обязательное поле"),
                                company_name: Yup.string()
                                    .max(
                                        512,
                                        "Убедитесь, что поле содержит не более 512 символов."
                                    )
                                    .required("Обязательное поле"),
                            })}
                        >
                            {({ values, errors, touched, setFieldValue }) => {
                                return (
                                    <>
                                        <Form className={styles.formik}>
                                            <Field
                                                id="full_name"
                                                name="full_name"
                                                placeholder="Фамилия имя *"
                                                className={styles.formik__input}
                                            />
                                            {errors.full_name &&
                                            touched.full_name ? (
                                                <div
                                                    className={
                                                        styles.formik_error
                                                    }
                                                >
                                                    {errors.full_name}
                                                </div>
                                            ) : null}

                                            <Field
                                                id="phone_number"
                                                name="phone_number"
                                                placeholder="Контактный телефон *"
                                                className={styles.formik__input}
                                            />
                                            {errors.phone_number &&
                                            touched.phone_number ? (
                                                <div
                                                    className={
                                                        styles.formik_error
                                                    }
                                                >
                                                    {errors.phone_number}
                                                </div>
                                            ) : null}
                                            <Field
                                                id="company_name"
                                                name="company_name"
                                                placeholder="Название компании *"
                                                className={styles.formik__input}
                                            />
                                            {errors.company_name &&
                                            touched.company_name ? (
                                                <div
                                                    className={
                                                        styles.formik_error
                                                    }
                                                >
                                                    {errors.company_name}
                                                </div>
                                            ) : null}

                                            <button
                                                className={
                                                    styles.formik__button
                                                }
                                                type="submit"
                                            >
                                                Начать сотрудничать
                                            </button>

                                            {isAccepted && (
                                                <div
                                                    className={
                                                        styles.formik_accepted
                                                    }
                                                >
                                                    Ваша заявка на
                                                    сотрудничество успешно
                                                    отправлена
                                                </div>
                                            )}
                                        </Form>
                                    </>
                                );
                            }}
                        </Formik>
                    </div>
                </>
            );

        default:
            return (
                <>
                    <div className={styles.formik_container}>
                        <Formik
                            initialValues={{
                                vacancy_id: 4,
                                full_name: "",
                                phone_number: "",
                                communication_method: "",
                                organization: "",
                                processed: flase,
                            }}
                            onSubmit={async (values) => {
                                await httpCommon
                                    .post("want-work/", values)
                                    .then(({ data }) => {});
                            }}
                        >
                            <Form className={styles.formik}>
                                <Field
                                    id="full_name"
                                    name="full_name"
                                    placeholder="Имя"
                                    className={styles.formik__input}
                                />
                                <Field
                                    id="phone_number"
                                    name="phone_number"
                                    placeholder="Контактный телефон"
                                    className={styles.formik__input}
                                />
                                <Field
                                    id="communication_method"
                                    name="communication_method"
                                    placeholder="Электронная почта"
                                    className={styles.formik__input}
                                />
                                <div className={styles.formik__selects}>
                                    <InputSelect placeholder="Должность" />
                                    <InputSelect placeholder="Компания" />
                                    <InputSelect placeholder="Университет" />
                                </div>
                                <button
                                    className={styles.formik__button}
                                    type="submit"
                                >
                                    Вступить в РСО
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </>
            );
    }
};

export default DefaultForm;

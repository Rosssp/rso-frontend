import React from "react";
import HeadQuarterRow from "../../components/headQuarterRow/HeadQuarterRow";
import CustomModal from "../../components/modal/Modal";
import DefaultForm from "../../components/DefaultForm/DefaultForm";

const FindHeadquartersList = ({ list }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const [initialFormData, setInitialFormData] = React.useState({
        vacancy_id: null,
        full_name: "",
        phone_number: "",
        email: "",
        communication_method: "",
        organization: "",
    });

    // let initialFormData = {
    //   vacancy_id: null,
    //   full_name: "",
    //   phone_number: "",
    //   email: "",
    //   communication_method: "",
    //   organization: "",
    // };

    const openModalWithData = (id) => {
        setInitialFormData({ ...initialFormData, vacancy_id: id });
        setIsModalOpen(true);
    };

    return (
        <>
            {list.map((item, index) => (
                <>
                    <HeadQuarterRow
                        key={index}
                        title={item.name}
                        logo={item.logo}
                        link={item.link}
                        joinFunc={openModalWithData}
                        id={item.id}
                        {...item}
                    />
                </>
            ))}
            <CustomModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                title="Вступить в этот штаб"
            >
                <DefaultForm
                    type="join"
                    modal__info="Заполните заявку и с вами свяжется наш специалист"
                    formInitialValues={initialFormData}
                />
            </CustomModal>
        </>
    );
};

export default FindHeadquartersList;

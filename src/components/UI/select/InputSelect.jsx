import React from "react";
import Select from "react-select";
// import Icon from "../icon/Icon";
import styles from "./InputSelect.module.scss";

const options = [
    { value: "chocolate", label: "Шоколад" },
    { value: "strawberry", label: "Клубника" },
    { value: "vanilla", label: "Печенье" },
];

const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: "block",
        marginRight: 8,
        height: 10,
        width: 10,
    },
});

const DropdownIndicator = (props) => {
    const {
        children = (
            <span
                style={{
                    width: "0",
                    height: "0",
                    borderWidth: "9.5px 5.5px 0 5.5px",
                    borderColor: "#5477D8 transparent transparent transparent",
                    borderStyle: "solid",
                    borderRadius: "0.678572px",
                }}
            />
        ),
        innerProps: { ref, ...restInnerProps },
    } = props;
    return (
        <div {...restInnerProps} ref={ref}>
            <div
                style={{
                    padding: "18px",
                    background: "#FFFFFF",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {children}
            </div>
        </div>
    );
};

const ClearIndicatorStyles = (base, state) => ({
    ...base,
    cursor: "pointer",
    borderColor: state.isFocused ? "blue" : "black",
});

const colourStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: "#F3F6FF",
        borderColor: "#E5ECF3",
        fontFamily: "Roboto",
        fontSize: "16px",
        lineHeight: "135%",
        borderRadius: "8px",
        minHeight: "60px",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = "cyan";
        return {
            ...styles,
            cursor: isDisabled ? "not-allowed" : "default",

            ":active": {
                ...styles[":active"],
            },
        };
    },
    input: (styles) => ({ ...styles, paddingLeft: "13px" }),
    placeholder: (styles) => ({
        ...styles,
        color: "#6D7BA4",
        lineHeight: "135%",
        paddingLeft: "13px",
    }),
    singleValue: (styles, { data }) => ({
        ...styles,
        paddingLeft: "13px",
        color: "#2b3a65",
    }),
    indicatorSeparator: (styles, { data }) => ({ ...styles, display: "none" }),
    indicatorContainer: (styles, { data }) => ({ ...styles, color: "cyan" }),
    menuList: (styles) => ({
        ...styles,
        background: "white",
        fontFamily: "Roboto",
        fontSize: "16px",
        lineHeight: "135%",
        color: "#6D7BA4",
    }),
};

const InputSelect = ({
    values = options,
    label,
    props,
    placeholder = "Выберите",
    fieldName,
    getValue,
    defaultValue,
}) => {
    console.log();
    return (
        <>
            <Select
                options={values}
                components={{ DropdownIndicator }}
                styles={colourStyles}
                label={label}
                placeholder={placeholder}
                isClearable={true}
                defaultValue={defaultValue !== -1 ? values[defaultValue] : null}
                onChange={(value) =>
                    fieldName
                        ? getValue(fieldName, value?.value)
                        : getValue(value?.value)
                }
                {...props}
            />
        </>
    );
};

export default InputSelect;

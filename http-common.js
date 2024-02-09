import axios from "axios";

export default axios.create({
    // baseURL: "http://185.22.234.115:9910/api/v1",
    // baseURL: "https://adm.rso.webjox.ru/api/v1",
    baseURL: process.env.NEXT_PUBLIC_HOST,
    // headers: {
    //     "Content-type": "application/json",
    // },
});

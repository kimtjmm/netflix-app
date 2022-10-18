import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "33bd6f26815f428b308a9232469d93c0",
        language: "ko-KR",
    },
});

export default instance;
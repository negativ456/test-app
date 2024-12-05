import axios from 'axios';
const url =  process.env.API_URL ?? "http://localhost:3002";

export const $api = axios.create({
    baseURL: url,
});


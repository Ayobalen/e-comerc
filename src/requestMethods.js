import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmUwNDEyYzA4YmIzNWY2MzY3MGU4YyIsImlhdCI6MTY1Njk4MDMyMCwiZXhwIjoxNjU3MjM5NTIwfQ.FjOrGnhXPe2Ee6FC3OFYbTvSQWtZJFNCiHXAK3vmjWg";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token:`Bearer ${TOKEN}` }
});
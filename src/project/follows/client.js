import axios from "axios";

const request = axios.create({withCredentials: true,});

const FOLLOWS_API = "http://localhost:4000/api";

export const findAllFollows = async () => {
    const response = await request.get(`${FOLLOWS_API}/follows`);
    return response.data;
}

export const findUsersFollowedByUser = async (userId) => {
    const response = await request.get(`${FOLLOWS_API}/users/${userId}/following`);
    return response.data;
}
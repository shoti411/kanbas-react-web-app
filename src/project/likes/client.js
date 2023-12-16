import axios from "axios";
const LIKES_API = "http://localhost:4000/project/api/";

const request = axios.create({
    withCredentials: true,
    baseURL: LIKES_API,
});



export const findAllLikes = async () => {};
export const createUserLikesBusiness = async (userId, businessId) => {
    const response = await request.post(`/users/${userId}/likes/${businessId}`);
    console.log(businessId);
    return response.data;
};
export const deleteUserLikesBusiness = async (userId, businessId) => {
    const response = await request.delete(`$/users/${userId}/likes/${businessId}`);
    return response.data;
};
export const findUsersThatLikeBusiness = async (businessId) => {
    const response = await request.get(`/likes/${businessId}/users`);
    return response.data;
};
export const findBusinessThatUserLikes = async (userId) => {
    const response = await request.get(`/users/${userId}/likes`);
    return response.data;
};
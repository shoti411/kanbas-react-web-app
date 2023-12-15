import axios from "axios";

const FOLLOWS_API = "http://localhost:4000/project/api/users";

const client = axios.create({
    withCredentials: true,
    baseURL: FOLLOWS_API,
});



// export const findAllFollows = async () => {
//     const response = await request.get(`${FOLLOWS_API}/follows`);
//     return response.data;
// }

export const createUserFollowsUser = async (followedId) => {
    const response = await client.post(`/${followedId}/follows`);
    return response.data;
}

export const deleteUserFollowsUser = async (followedId) => {
    const response = await client.delete(`/${followedId}/follows`);
    return response.data;
}

// export const findUsersFollowedByUser = async (userId) => {
//     const response = await client.get(`${FOLLOWS_API}/users/${userId}/following`);
//     return response.data;
// }

export const findFollowersOfUser = async (userId) => {
    const response = await client.get(`/${userId}/followers`);
    return response.data;
}

export const findFollowedUsersOfUser = async (userId) => {
    const response = await client.get(`/${userId}/following`);
    return response.data;
}
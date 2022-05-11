import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        headers:{"API-KEY": "7a72805e-3ef8-4b01-8441-810a01e74cd2"},
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
    }
)

export const usersApi = {
    getUsers(currentPage, usersOnPage ){
        return instance.get(`users?page=${currentPage}&count=${usersOnPage}`).then(response =>{
            return response.data;
        })
    },
    followUser(userId, handleToggleFollowButton){
        return instance.post('follow/' + userId).then(response=>{
            handleToggleFollowButton(userId);
        })
    },
    unfollowUser(userId, handleToggleFollowButton){
        return instance.delete('follow/' + userId).then(response=>{
            handleToggleFollowButton(userId);
        })
    }
}

export const profileApi = {
    getUserProfile(userId){
        return instance.get('profile/' + userId).then(response=>{
            return response.data;
        })
    }
}
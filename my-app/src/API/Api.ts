import axios from "axios";
import {UsersType} from "../Redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3bb1f301-4343-478c-bd6d-e432168f19d7"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}}`)
            .then(responce => {
                return responce.data
            })
    },
    deleteUsers(id:number) {
        return instance.delete(`follow/${id}`)
            .then(responce => {
                return responce.data
            })
    },
    postUsers(id:number) {
        return instance.post(`follow/${id}`)
            .then(responce => {
                return responce.data
            })
    }
}
export const authAPI = {
    authGet() {
        return instance.get(`auth/me`)
            .then(responce => {
                return responce.data
            })
    }

}
export const profileAPI={
    getShowProfile(userID:number){
        return instance.get(`profile/`+ userID)
            .then(responce => {
                return responce.data
            })
    }
}
import { LoginAPIInstance } from "."

export const UserAPI = {
    getUserProfile(userId) {
        const url = import.meta.env.VITE_APP_USER_PROFILE_API_URL + `${userId}`
        return LoginAPIInstance.get(url)
    },

    getUserProjects(userId) {
        const url = import.meta.env.VITE_APP_USER_PROJECTS_API_URL + `${userId}`
        return LoginAPIInstance.get(url)
    }
}
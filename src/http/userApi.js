import { LoginAPIInstance } from "."

export const UserAPI = {
    getUserProfile(userId) {
        const url = import.meta.env.VITE_APP_USER_PROFILE_API_URL + `${userId}`
        return LoginAPIInstance.get(url)
    },

    updateUserProfile(userId, name, bio, company, location) {
        const url = import.meta.env.VITE_APP_USER_PROFILE_API_URL + `${userId}`
        const data = { name, bio, company, location }
        return LoginAPIInstance.put(url, { ...data })
    },

    getUserProjects(userId) {
        const url = import.meta.env.VITE_APP_USER_PROJECTS_API_URL + `${userId}`
        return LoginAPIInstance.get(url)
    }
}
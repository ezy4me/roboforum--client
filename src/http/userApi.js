import { FormDataAPIInstance, LoginAPIInstance } from "."

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
    },

    postUserProject(userId, title, description, projectTypeId, projectFiles) {
        const url = import.meta.env.VITE_APP_PROJECTS_API_URL

        const formData = new FormData()
        formData.append('userId', userId)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('projectTypeId', projectTypeId)
        formData.append('userId', userId)
        formData.append('projectFiles', projectFiles)

        return FormDataAPIInstance.post(url, formData)
    }
}
import { FormDataAPIInstance, LoginAPIInstance } from "."

export const UserAPI = {
    getUserProfile(userId) {
        const url = import.meta.env.VITE_APP_USER_PROFILE_API_URL + `${userId}`
        return LoginAPIInstance.get(url)
    },

    updateUser(userId, username) {
        const url = import.meta.env.VITE_APP_USER_API_URL + `${userId}`
        const data = { username }
        return LoginAPIInstance.put(url, { ...data })
    },

    updateUserProfile(userId, name, bio, company, location, image) {
        const url = import.meta.env.VITE_APP_USER_PROFILE_API_URL + `${userId}`

        const formData = new FormData()
        formData.append('userId', userId)
        formData.append('name', name)
        formData.append('bio', bio)
        formData.append('company', company)
        formData.append('location', location)
        formData.append('image', image)

        return FormDataAPIInstance.put(url, formData)
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
        projectFiles.forEach((file, index) => {
            formData.append('projectFiles', file);
        });

        console.log(projectFiles);

        return FormDataAPIInstance.post(url, formData)
    }
}
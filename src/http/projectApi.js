import { DefaultAPIInstance } from "."

export const ProjectAPI = {
    getPublicProjects() {
        const url = import.meta.env.VITE_APP_PROJECTS_API_URL
        return DefaultAPIInstance.get(url)
    },
}
import { DefaultAPIInstance, LoginAPIInstance } from "."

export const ProjectAPI = {
    getPublicProjects() {
        const url = import.meta.env.VITE_APP_PROJECTS_API_URL
        return DefaultAPIInstance.get(url)
    },

    getOneProject(projectId) {
        const url = import.meta.env.VITE_APP_PROJECTS_API_URL + 'one' + `/${projectId}`
        return DefaultAPIInstance.get(url)
    },

    getProjectComments(projectId) {
        const url = import.meta.env.VITE_APP_USER_PROJECT_COMMENT_API_URL + `/${projectId}`
        return DefaultAPIInstance.get(url)
    },

    deleteProjectImage(projectId, imageId) {
        const url = import.meta.env.VITE_APP_USER_PROJECTS_API_URL + `${projectId}` +  `/${imageId}`
        return LoginAPIInstance.delete(url)
    },

    postProjectComment(projectId, userId, comment) {
        const url = import.meta.env.VITE_APP_USER_PROJECT_COMMENT_API_URL + `/${projectId}`
        const data = { userId, comment }
        return LoginAPIInstance.post(url, { ...data })
    },

    postProjectCommentAnswer(projectId, userId, comment, userCommentId) {
        const url = import.meta.env.VITE_APP_USER_PROJECT_COMMENT_ANSWER_API_URL + `/${projectId}`
        const data = { userId, comment, userCommentId }
        return LoginAPIInstance.post(url, { ...data })
    }
}
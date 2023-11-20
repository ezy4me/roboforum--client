import { ProjectAPI } from "@/http/projectApi";
const state = {
    publicProjects: null,
    project: null
}

const getters = {
    getPublicProjects: (state) => state.publicProjects,
    getProject: (state) => state.project,
}

const actions = {
    async GET_PUBLIC_PROJECTS({ commit }) {
        return ProjectAPI.getPublicProjects().then((res) => {
            console.log(res.data);
            commit('setPublicProjects', res.data)
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

    async GET_ONE_PROJECT({ commit }, { projectId }) {
        return await ProjectAPI.getOneProject(projectId).then((res) => {
            console.log(res.data);
            commit('setProject', res.data)
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

}

const mutations = {
    setPublicProjects(state, publicProjects) {
        state.publicProjects = publicProjects;
        localStorage.setItem('publicProjects', JSON.stringify(publicProjects));
    },

    setProject(state, project) {
        state.project = project;
        localStorage.setItem('project', JSON.stringify(project));
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

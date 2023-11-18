import { ProjectAPI } from "@/http/projectApi";
const state = {
    publicProjects: null,
}

const getters = {
    getPublicProjects: (state) => state.publicProjects,
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

}

const mutations = {
    setPublicProjects(state, publicProjects) {
        state.publicProjects = publicProjects;
        localStorage.setItem('publicProjects', JSON.stringify(publicProjects));
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

import { LoginAPIInstance, DefaultAPIInstance } from "@/http";
import { UserAPI } from "@/http/userApi";

const state = {
    userProfile: null,
    userProjects: null,
}

const getters = {
    getUserProfile: (state) => state.userProfile,
    getUserProjects: (state) => state.userProjects,
}

const actions = {
    async GET_USER_PROFILE({ commit }, { userId }) {
        return UserAPI.getUserProfile(userId).then((res) => {
            console.log(res.data);
            commit('setUserProfile', res.data)
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

    async UPDATE_USER_PROFILE({ commit }, { userId, name, bio, company, location }) {
        return UserAPI.updateUserProfile(userId, name, bio, company, location).then((res) => {
            console.log(res.data);
            commit('setUserProfile', res.data)
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

    async GET_USER_PROJECTS({ commit }, { userId }) {
        return UserAPI.getUserProjects(userId).then((res) => {
            console.log(res.data);
            commit('setUserProjects', res.data)
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

}

const mutations = {
    setUserProfile(state, userProfile) {
        state.userProfile = userProfile;
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    },

    setUserProjects(state, userProjects) {
        state.userProjects = userProjects;
        localStorage.setItem('userProjects', JSON.stringify(userProjects));
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

import { LoginAPIInstance, DefaultAPIInstance } from "@/http";
import { UserAPI } from "@/http/userApi";

const state = {
    userProfile: null,
}

const getters = {
    getUserProfile: (state) => state.userProfile,
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

}

const mutations = {
    setUserProfile(state, userProfile) {
        state.userProfile = null;
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

import { DiscussionAPI } from "@/http/discussionApi";
const state = {
    publicDiscussions: null,
    discussion: null,
    discussionsComments: null,

}

const getters = {
    getPublicDiscussions: (state) => state.publicDiscussions,
    getDiscussion: (state) => state.discussion,
    getDiscussionComments: (state) => state.discussionsComments,
}

const actions = {
    async GET_PUBLIC_DISCUSSIONS({ commit }) {
        return DiscussionAPI.getPublicDiscussions().then((res) => {
            // console.log(res.data);
            commit('setPublicDiscussions', res.data)
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

    async GET_ONE_DISCUSSION({ commit }, { discussionId }) {
        return await DiscussionAPI.getOneDiscussion(discussionId).then((res) => {
            // console.log(res.data);
            commit('setDiscussion', res.data)
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

    async GET_DISCUSSION_COMMENTS({ commit }, { discussionId }) {
        return await DiscussionAPI.getDiscussionComments(discussionId).then((res) => {
            // console.log(res.data);
            commit('setDiscussionComments', res.data)
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

    async POST_DISCUSSION_COMMENT({ _ }, { discussionId, userId, comment }) {
        return await DiscussionAPI.postDiscussionComment(discussionId, userId, comment).then((res) => {
            console.log(res.data);
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

    async POST_DISCUSSION_COMMENT_ANSWER({ _ }, { discussionId, userId, comment, userCommentId }) {
        console.log(discussionId);
        return await DiscussionAPI.postDiscussionCommentAnswer(discussionId, userId, comment, userCommentId).then((res) => {
            console.log(res.data);
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

    async DELETE_DISCUSSION_IMAGE({ commit }, { discussionId, imageId }) {
        return await DiscussionAPI.deleteDiscussionImage(discussionId, imageId).then((res) => {
            console.log(res.data);
            commit('setDiscussion', res.data)
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },

    async SEARCH_DISCUSSION({ commit }, searchTerm) {
        return await DiscussionAPI.searchDiscussion(searchTerm).then((res) => {
            console.log(res.data);
            commit('setPublicDiscussions', res.data)
        })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

}

const mutations = {
    setPublicDiscussions(state, publicDiscussions) {
        state.publicDiscussions = publicDiscussions;
        localStorage.setItem('publicDiscussions', JSON.stringify(publicDiscussions));
    },

    setDiscussion(state, discussion) {
        state.discussion = discussion;
        localStorage.setItem('discussion', JSON.stringify(discussion));
    },

    setDiscussionComments(state, discussionComments) {
        state.discussionComments = discussionComments;
        localStorage.setItem('discussionComments', JSON.stringify(discussionComments));
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

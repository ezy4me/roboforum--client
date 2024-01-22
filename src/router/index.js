import { createRouter, createWebHistory } from "vue-router";

const isAuthenticated = function (to, from, next) {
    if (localStorage.getItem('userRole') === 'USER') {
        next()
    }
    else next({ name: 'main' })
}


const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../pages/MainPage.vue'),
    },
    {
        path: '/support',
        name: 'support',
        component: () => import('../pages/SupportPage.vue'),
    },

    {
        path: '/account',
        name: 'account',
        beforeEnter: isAuthenticated,
        component: () => import('../modules/Account/AccountPage.vue'),
        children: [
            {
                path: 'body',
                name: 'accountBody',
                beforeEnter: isAuthenticated,
                component: () => import('../modules/Account/VAccountBody.vue'),
            },
            {
                path: 'edit',
                name: 'accountEdit',
                beforeEnter: isAuthenticated,
                component: () => import('../modules/Account/VAccountEditData.vue'),
            },
            {
                path: 'newProject',
                name: 'newProject',
                beforeEnter: isAuthenticated,
                component: () => import('../modules/Project/VProjectForm.vue'),
            },
            {
                path: 'newDiscussion',
                name: 'newDiscussion',
                beforeEnter: isAuthenticated,
                component: () => import('../modules/Discussion/VDiscussionForm.vue'),
            },
            {
                path: 'editProject/:projectId',
                name: 'editProject',
                beforeEnter: isAuthenticated,
                props: true,
                component: () => import('../modules/Project/VProjectForm.vue'),
            },
            {
                path: 'editDiscussion/:discussionId',
                name: 'editDiscussion',
                beforeEnter: isAuthenticated,
                props: true,
                component: () => import('../modules/Discussion/VDiscussionForm.vue'),
            },
            {
                path: 'userProjects/:userId',
                name: 'userProjects',
                beforeEnter: isAuthenticated,
                props: true,
                component: () => import('../modules/Account/VAccountProjects.vue'),
            },
            {
                path: 'userDiscussions/:userId',
                name: 'userDiscussions',
                beforeEnter: isAuthenticated,
                props: true,
                component: () => import('../modules/Account/VAccountDiscussions.vue'),
            }
        ],
        redirect: '/account/body'
    },
    {
        path: '/forum-discussions',
        name: 'forum-discussions',
        component: () => import('../pages/ForumDiscussionsPage.vue'),
    },
    {
        path: '/forum-community',
        name: 'forum-community',
        component: () => import('../pages/ForumCommunityPage.vue'),
    },
    {
        path: '/project/:projectId',
        name: 'project',
        props: true,
        component: () => import('../modules/Project/VProjectInfo.vue'),
    },
    {
        path: '/discussion/:discussionId',
        name: 'discussion',
        props: true,
        component: () => import('../modules/Discussion/VDiscussionInfo.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        return { top: 0, behavior: "smooth" };
    }
};

router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((to, from) => {
    window.scrollTo(scrollBehavior(to, from, null));
});

export default router;
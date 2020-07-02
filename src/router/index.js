import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    { path: "/", redirect: { name: "login" } },
    {
        path: "/home",
        name: "home",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Home.vue"),
        meta: {
            title: "Главная"
        }
    },
    {
        path: "/module",
        name: "module",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Module.vue"),
        meta: {
            title: "Модуль"
        }
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Login.vue"),
        meta: {
            title: "Вход"
        }
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Register.vue"),
        meta: {
            title: "Регистрация"
        }
    },
    /*admin */
    {
        path: "/courses",
        name: "courses",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Courses.vue"),
        meta: {
            title: "Курсы"
        }
    },
    {
        path: "/courses/:pk/details",
        name: "courses details",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/CourseDetails.vue"),
        meta: {
            title: "Курсы"
        }
    },
    {
        path: "/users",
        name: "users",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Users.vue"),
        meta: {
            title: "Пользователи"
        }
    },
    {
        path: "/settings",
        name: "settings",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Settings.vue"),
        meta: {
            title: "Настройки"
        }
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title + " | Pure";
    next();
});
export default router;
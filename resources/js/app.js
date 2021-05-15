/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import ApolloClient from "apollo-boost";
import Vue from "vue";
import VueApollo from "vue-apollo";
import VueRouter from "vue-router";
import "./bootstrap";

/* Global Components */
import Navbar from "./components/navigation/Navbar.vue";

/* Post views */
import PostList from "./views/post/PostList.vue";
import Post from "./views/post/Post.vue";
import TopicPosts from "./views/post/TopicPost.vue";
import AuthorPost from "./views/post/AuthorPost.vue";

/* Auth views */
import Login from "./views/auth/Login.vue";
import Register from "./views/auth/Register.vue";

import NotFound from "./views/NotFound.vue";

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueApollo);

const routes = [
    {
        path: "/",
        name: "Index",
        component: PostList
    },
    {
        path: "/post/:id",
        name: "Post",
        component: Post
    },
    {
        path: "/topic/:slug",
        name: "Topic",
        component: TopicPosts
    },
    {
        path: "/author/:id",
        name: "AuthorPost",
        component: AuthorPost
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "*",
        name: "404",
        component: NotFound
    }
];

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: "http://blog.test/graphql",
    headers: {
        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')
            .content
    },
    credentials: "include",
    onError: (err) => console.log(err)
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

const router = new VueRouter({
    mode: "history",
    routes
});

/* Global components */
Vue.component("navbar", Navbar);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    apolloProvider,
    router
});

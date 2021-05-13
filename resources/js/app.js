/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from "vue";
import VueRouter from "vue-router";
import "./bootstrap";
import PostList from "./views/post/PostList.vue"
import Post from "./views/post/Post.vue"

window.Vue = Vue;
Vue.use(VueRouter);

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
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router
});

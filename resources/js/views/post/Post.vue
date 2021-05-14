<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-2/2 my-20">
        <div class="pb-5"></div>
        <div class="" v-if="$apollo.loading">
            <div class="w-full">
                <div class="bg-white rounded">
                    <div
                        class="bg-gray-300 mb-12 h-5 p-3 overflow-hidden animate-pulse max-w-md"
                    ></div>
                    <div
                        class="bg-gray-300 mb-12 h-12 p-3 overflow-hidden animate-pulse"
                    ></div>
                    <div class="h- mb-12">
                        <div class="grid grid-cols-3 gap-4 mt-2">
                            <div
                                class="h-5 bg-gray-300 rounded animate-pulse"
                            ></div>
                            <div
                                class="h-5  col-span-2 bg-gray-300 rounded animate-pulse"
                            ></div>
                            <div
                                class="h-5 col-span-2 bg-gray-300 rounded animate-pulse"
                            ></div>
                            <div
                                class=" h-5 bg-gray-300 rounded animate-pulse"
                            ></div>
                            <div
                                class="h-5 bg-gray-300 rounded animate-pulse"
                            ></div>
                            <div
                                class="h-5 bg-gray-300 rounded animate-pulse"
                            ></div>
                            <div
                                class="h-5 bg-gray-300 rounded animate-pulse"
                            ></div>
                            <div
                                class="h-5 col-span-3 bg-gray-300 rounded animate-pulse"
                            ></div>
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        <div
                            class="bg-gray-300 h-20 pt-5 w-20 h-20 rounded-full overflow-hidden animate-pulse max-w-md"
                        ></div>
                        <div class="flex-1 space-y-4 pt-3">
                            <div
                                class="bg-gray-300 h-5 pb-5 animate-pulse max-w-md"
                            ></div>
                            <div
                                class="bg-gray-300 h-5 pt-5 animate-pulse max-w-md"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="" v-else>
            <div class="text-md text-gray-600">
                By
                <b>
                    <router-link
                        :to="{
                            name: 'AuthorPost',
                            params: { id: post.author.id }
                        }"
                        class="hover:underline"
                    >
                        {{ post.author.name }}
                    </router-link>
                </b>
                in {{ post.topic.name }} &#8226;
                {{
                    moment(post.created_at)
                        .startOf("day")
                        .fromNow()
                }}
                <router-link
                    to="/"
                    class="float-right text hover:underline text-1md text-blue-500"
                >
                    Go to home
                </router-link>
            </div>

            <h1 class="text-5xl mt-10 font-bold mb-12">{{ post.title }}</h1>

            <p class="text-gray-700 pb-3 mb-12 whitespace-pre-line">
                {{ post.content }}
            </p>

            <div class="mb-24 flex">
                <div class="mr-6">
                    <img
                        :src="`/storage/faces/${post.author.avatar}`"
                        alt="Author avatar"
                        class="w-16 h-16 rounded-full"
                    />
                </div>
                <div class="flex flex-col justify-center">
                    <div class="text-md text-gray-600">
                        Written by
                        <router-link
                            :to="{
                                name: 'AuthorPost',
                                params: { id: post.author.id }
                            }"
                            class="text-gray-800 hover:underline"
                        >
                            {{ post.author.name }}
                        </router-link>
                    </div>
                    <div class="text-sm text-gray-600">
                        Published in
                        <router-link
                            :to="{
                                name: 'Topic',
                                params: { slug: post.topic.slug }
                            }"
                            class="text-blue-400 hover:underline"
                        >
                            {{ post.topic.name }}
                        </router-link>
                        on
                        {{ moment(post.created_at).format("LL") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import gql from "graphql-tag";

export default {
    name: "Post",
    apollo: {
        post: {
            query: gql`
                query($id: ID!) {
                    post(id: $id) {
                        id
                        title
                        content
                        created_at
                        author {
                            id
                            name
                            avatar
                        }
                        topic {
                            name
                            slug
                        }
                    }
                }
            `,
            variables: function() {
                return { id: this.$route.params.id };
            },
            error: function() {
                this.$router.push({ name: '404' })
            }
        }
    },
    data: () => ({
        moment: moment
    })
};
</script>

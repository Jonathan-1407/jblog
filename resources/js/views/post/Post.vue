<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-2/2 my-20">
        <div v-if="$apollo.loading">Loading</div>
        <div class="" v-else>
            <div class="text-md text-gray-600">
                By <b>{{ post.author.name }}</b> in
                {{ post.topic.name }} &#8226;
                {{
                    moment(post.created_at)
                        .startOf("day")
                        .fromNow()
                }}
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
                    <div class="text-md text-gray-700">
                        Written by <b>{{ post.author.name }}</b>
                    </div>
                    <div class="text-sm text-gray-600">
                        Published in {{ post.topic.name }} on
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

            variables() {
                return { id: this.$route.params.id };
            }
        }
    },
    data: () => ({
        moment: moment
    })
};
</script>

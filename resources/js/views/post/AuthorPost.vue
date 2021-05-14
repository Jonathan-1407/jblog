<template>
    <div>
        <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-2/2 my-20">
            <div v-if="$apollo.loading">
                <PostItemLoad v-for="item in 20" :key="item"></PostItemLoad>
            </div>
            <div v-else>
                <div class="text-4xl">
                    <router-link to="/" class="text-gray-500 hover:underline">
                        Posts
                    </router-link>
                    <span class="text-gray-500">/</span> {{ user.name }}
                </div>
                <div v-for="post in user.posts" :key="post.id">
                    <PostItem :post="post"></PostItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import PostItem from "../../components/posts/ListItem";
import PostItemLoad from "../../components/posts/ListItemLoad";

export default {
    name: "PostList",
    components: {
        PostItem,
        PostItemLoad
    },
    apollo: {
        user: {
            query: gql`
                query($id: ID!) {
                    user(id: $id) {
                        id
                        name
                        posts {
                            id
                            title
                            lead
                            created_at
                            author {
                                id
                                name
                            }
                            topic {
                                name
                                slug
                            }
                        }
                    }
                }
            `,
            variables: function() {
                return {
                    id: this.$route.params.id
                };
            }
        }
    }
};
</script>

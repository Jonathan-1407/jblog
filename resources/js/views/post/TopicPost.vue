<template>
    <div>
        <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-2/2 my-20">
            <div class="text-4xl">
                <router-link to="/" class="text-gray-500 hover:underline">
                    Posts
                </router-link>
                <span class="text-gray-500">/</span> {{ topic.name }}
            </div>
            <div v-if="$apollo.loading"></div>
            <div v-else>
                <div v-for="post in topic.posts" :key="post.id">
                    <PostItem :post="post"></PostItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import PostItem from "../../components/posts/ListItem";

export default {
    name: "PostList",
    components: {
        PostItem
    },
    apollo: {
        topic: {
            query: gql`
                query($slug: String!) {
                    topic(slug: $slug) {
                        id
                        name
                        slug
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
                    slug: this.$route.params.slug
                };
            }
        }
    }
};
</script>

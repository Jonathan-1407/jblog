<template>
    <div>
        <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-2/2 my-20">
            <h2 class="text-4xl">All Posts</h2>
            <div v-if="$apollo.loading"></div>
            <div v-else>
                <div v-for="post in posts" :key="post.id">
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
        posts: gql`
            {
                posts {
                    id
                    title
                    lead
                    created_at
                    author {
                        id
                        name
                    }
                }
            }
        `
    }
};
</script>

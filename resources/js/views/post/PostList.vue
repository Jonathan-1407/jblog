<template>
    <div class="animate-fade">
        <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-2/2">
            <h2 class="text-4xl">Posts</h2>
            <div v-if="$apollo.loading">
                <PostItemLoad v-for="item in 5" :key="item"></PostItemLoad>
            </div>
            <div v-else>
                <div v-for="post in posts.data" :key="post.id">
                    <PostItem :post="post"></PostItem>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center my-12" v-if="!$apollo.loading">
            <p class="text-bold">
                Page {{ pagination.current_page }} of {{ pagination.last_page }}
            </p>
            <div class="flex text-gray-700">
                <div
                    class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
                    v-show="pagination.current_page > 1"
                    @click.prevent="changePage(pagination.current_page - 1)"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-left w-6 h-6"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </div>
                <div class="flex h-12 font-medium rounded-full bg-gray-200">
                    <div
                        class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full"
                        v-for="page in pages_number"
                        :key="page"
                        :class="[
                            page === is_actived ? 'bg-blue-500 text-white' : ''
                        ]"
                        @click.prevent="changePage(page)"
                        v-text="page"
                    ></div>
                </div>
                <div
                    class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
                    v-show="pagination.current_page < pagination.last_page"
                    @click.prevent="changePage(pagination.current_page + 1)"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-chevron-right w-6 h-6"
                    >
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
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
    computed: {
        is_actived: function() {
            return this.pagination.current_page;
        },
        pages_number: function() {
            if (!this.pagination.to) {
                return [];
            }
            let from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }

            let to = from + (this.offset + 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }

            let pages_array = [];
            while (from <= to) {
                pages_array.push(from);
                from++;
            }

            return pages_array;
        }
    },
    data: () => ({
        page: 1,
        offset: 3,
        pagination: {
            total: 0,
            current_page: 0,
            per_page: 0,
            last_page: 0,
            from: 0,
            to: 0
        }
    }),
    apollo: {
        posts: {
            query: gql`
                query($page: Int!) {
                    posts(page: $page) {
                        paginatorInfo {
                            total
                            perPage
                            currentPage
                            lastPage
                            hasMorePages
                            count
                            firstItem
                            lastItem
                        }
                        data {
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
                return { page: this.page };
            },
            result: async function({ data }) {
                let self = this;

                self.pagination = {
                    total: data.posts.paginatorInfo.total,
                    current_page: data.posts.paginatorInfo.currentPage,
                    per_page: data.posts.paginatorInfo.perPage,
                    last_page: data.posts.paginatorInfo.lastPage,
                    from: data.posts.paginatorInfo.firsItem,
                    to: data.posts.paginatorInfo.lastItem
                };
            }
        }
    },
    methods: {
        changePage: function(page) {
            let self = this;

            self.pagination.current_page = page;
            this.page = page;
        }
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>

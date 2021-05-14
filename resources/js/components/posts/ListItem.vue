<template>
    <div>
        <div class="p-4">
            <div class=" w-full lg:max-w-full">
                <div
                    class="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between leading-normal"
                >
                    <div class="text-right">
                        <span
                            class="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                            <router-link
                                :to="{
                                    name: 'Topic',
                                    params: { slug: post.topic.slug }
                                }"
                                class="hover:underline"
                            >
                                {{ post.topic.name }}
                            </router-link>
                        </span>
                    </div>
                    <div class="mb-6">
                        <router-link
                            :to="{ name: 'Post', params: { id: post.id } }"
                        >
                            <div
                                class="text-gray-900 font-bold text-xl mb-2 hover:underline hover:text-gray-500"
                            >
                                {{ post.title }}
                            </div>
                            <p class="text-gray-700 hover:underlibe text-base">
                                {{ post.lead }}
                            </p>
                        </router-link>
                    </div>

                    <div class="flex items-center">
                        <div class="text-sm">
                            <p class="text-gray-600 leading-none">
                                By <b> {{ post.author.name }} </b> &#8226;
                                {{
                                    moment(post.created_at)
                                        .startOf("day")
                                        .fromNow()
                                }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: "ListItem",
    props: {
        post: Object
    },
    data: () => ({
        moment: moment
    })
};
</script>

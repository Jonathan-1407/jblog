<template>
    <div class="h-screen w-screen bg-gray-200 flex justify-center">
        <div class="text-center text-gray-600">
            <h1 class="text-6xl font-sans text-shadow">404</h1>
            <h3 class="text-4xl font-sans text-shadow">
                This page can not be found!
            </h3>
        </div>
        <div class="absolute bottom-0 mb-12 text-gray-600 text-center text-xl">
            <span class="opacity-50">Take me back to</span>
            <router-link :to="{ name: 'Index' }" class="border-b"
                >Home</router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound"
};
</script>

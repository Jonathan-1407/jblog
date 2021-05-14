<template>
    <div>
        <div class="p-4">
            <div class="w-full lg:max-w-full">
                <div
                    class="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between leading-normal"
                >
                    <div
                        class="bg-gray-300 mb-4 h-5 p-3 overflow-hidden animate-pulse max-w-md"
                    ></div>
                    <div class="h- mb-6">
                        <div class="grid grid-cols-3 gap-4 mt-2">
                            <div
                                class="h-5 col-span-2 bg-gray-300 rounded animate-pulse"
                            ></div>
                            <div
                                class=" h-5 bg-gray-300 rounded animate-pulse"
                            ></div>
                            <div
                                class="h-5 col-span-3 bg-gray-300 rounded animate-pulse"
                            ></div>
                        </div>
                    </div>
                    <div
                        class="bg-gray-300 h-5 pb-5 animate-pulse max-w-xs"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListItemLoad"
};
</script>

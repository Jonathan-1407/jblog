<template>
    <div class="container px-4 max-w-6xl mx-auto my-8">
        <div class="w-full max-w-xl mx-auto">
            <form
                class="
        LgnForm
        max-w-sm
        mx-auto
        shadow-lg
        bg-white
        rounded-lg
        pt-6
        pb-8
        mb-4
        px-8
      "
            >
                <h1 class="text-center text-4xl">JBLOG</h1>
                <div class="MskForm">
                    <div class="mb-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            class="
              shadow
              apperance-none
              border
              rounded
              w-full
              py-4
              px-3
              text-gray-700
              leading-tight
              focus:outline-none
              focus:shadow-outline
            "
                            id="username"
                            type="text"
                            placeholder="Example@email.com"
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-4
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none
              focus:shadow-outline
            "
                            id="password"
                            type="password"
                            placeholder="******************"
                        />
                        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                    </div>

                    <div class="flex items-center justify-end">
                        <button
                            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none
              focus:shadow-outline
            "
                        >
                            Sign In
                        </button>
                    </div>
                    <p class="mt-4 text-black-500 text-xs">
                        Don't have an account,
                        <router-link
                            :to="{ name: 'Register' }"
                            class="text-black-700 font-bold hover:underline"
                            >Create an account</router-link
                        >
                        now.
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

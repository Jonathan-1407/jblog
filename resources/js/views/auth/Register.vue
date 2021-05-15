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
                id="form-register"
            >
                <h1 class="text-center text-4xl">JBLOG</h1>
                <div
                    v-if="errors.length"
                    class="p-2 bg-red-600 text-gray-100 rounded-sm mb-2 text-sm text-center"
                >
                    <div v-for="(error, index) in errors" :key="index">
                        {{ error.message }}
                    </div>
                </div>
                <div class="MskForm">
                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Full Name
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
                            type="text"
                            placeholder="Full name"
                            v-model="name"
                        />
                    </div>
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
                            type="text"
                            placeholder="Example@email.com"
                            v-model="email"
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
                            type="password"
                            placeholder="******************"
                            v-model="password"
                        />
                    </div>

                    <div class="flex items-center justify-end">
                        <button
                            class="
                              bg-green-500
                              hover:bg-green-700
                              text-white
                              font-bold
                              py-2
                              px-4
                              rounded
                              focus:outline-none
                              focus:shadow-outline
                            "
                            @click.prevent="register()"
                        >
                            Sign Up
                        </button>
                    </div>
                    <p class="mt-4 text-black-500 text-xs">
                        Already you have an account?
                        <router-link
                            :to="{ name: 'Login' }"
                            class="text-black-700 font-bold hover:underline"
                        >
                            Login
                        </router-link>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Register from "../../graphql/auth/Register.gql";
import { gqlErrors } from "../../utils";

export default {
    name: "Register",
    data: () => ({
        name: "",
        email: "",
        password: "",
        errors: []
    }),
    methods: {
        register: async function() {
            let self = this;
            self.errors = [];

            try {
                await self.$apollo.mutate({
                    mutation: Register,
                    variables: {
                        email: self.email,
                        password: self.password,
                        name: self.name
                    }
                });
                self.$router.push({ name: "Index" });
            } catch (err) {
                self.errors = gqlErrors(err);
            }
        }
    }
};
</script>

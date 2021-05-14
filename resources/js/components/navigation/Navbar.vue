<template>
    <div>
        <header
            class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2"
        >
            <div class="flex-1 flex justify-between items-center">
                <a href="#">
                    <router-link :to="{ name: 'Index' }">
                        <h1>JBLOG</h1>
                    </router-link>
                </a>
            </div>

            <label for="menu-toggle" class="pointer-cursor lg:hidden block"
                ><svg
                    class="fill-current text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                >
                    <title>menu</title>
                    <path
                        d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                    ></path></svg
            ></label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div
                class="hidden lg:flex lg:items-center lg:w-auto w-full"
                id="menu"
            >
                <nav>
                    <ul
                        class="lg:flex items-center justify-between text-base text-gray-600 pt-4 lg:pt-0"
                    >
                        <li>
                            <router-link
                                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400"
                                :to="{ name: 'Login' }"
                            >
                                Login
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400"
                                :to="{name: 'Register'}"
                            >
                                Register
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <a
                    href="#"
                    class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
                >
                    <img
                        class="rounded-full w-10 h-10 border-2 border-transparent hover:border-blue-400"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Andy Leverenz"
                    />
                </a>
                <a
                    class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400 lg:mb-0 mb-2"
                    href="#"
                >
                    Sign out
                </a>
            </div>
        </header>
    </div>
</template>

<script>
export default {};
</script>

<style>
#menu-toggle:checked + #menu {
    display: block;
}
</style>

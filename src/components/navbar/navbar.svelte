<script>
    import { onMount } from "svelte";
    import { navbarItems } from "~/data/navbar.ts";

    let isOpen = false;
    const toggleMenu = () => (isOpen = !isOpen);

    onMount(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                isOpen = false;
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });
</script>

<nav class="text-primary">
    <div class="max-w-6xl mx-auto px-8 sm:px-6 lg:px-4">
        <div
            class="flex flex-row-reverse md:flex-row items-center justify-between h-16"
        >
            <div class="flex items-center">
                <div>
                    <img
                        class="w-10 rounded-full"
                        src="/public/logo-square.png"
                        alt="Logo"
                    />
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        {#each navbarItems as item}
                            <a
                                href={item.href}
                                class="hover:bg-indigo-900 px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200"
                                >{item.label}</a
                            >
                        {/each}
                    </div>
                </div>
            </div>
            <div class="md:hidden">
                <button
                    on:click={toggleMenu}
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white z-50"
                >
                    <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <div class="hidden md:block">
                <a
                    href="/our-games"
                    class="inline-block bg-primary rounded-md hover:bg-primary-lightest hover:text-primary px-4 py-2 text-white font-bold"
                >
                    Our Games
                </a>
            </div>
        </div>
    </div>

    {#if isOpen}
        <div class="fixed inset-0 bg-black z-50 md:hidden">
            <div class="flex flex-col h-full">
                <div class="flex justify-between items-center p-4">
                    <button on:click={toggleMenu} class="text-white">
                        <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div class="flex-grow overflow-y-auto">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        {#each navbarItems as item}
                            <a  
                                href={item.href}
                                class="block px-3 py-2 text-base font-medium border-b border-gray-700"
                                >{item.label}</a
                            >
                        {/each}
                    </div>
                </div>
                <div class="p-4">
                    <a
                        href="#"
                        class="block w-full text-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-white font-medium"
                    >
                        LET'S TALK ON DISCORD
                    </a>
                </div>
            </div>
        </div>
    {/if}
</nav>

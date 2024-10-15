<script lang="ts">
    let windowScroll = 0;
    $: hasScrolled = windowScroll <= 100;
    $: navbarClass = hasScrolled ? 'bg-transparent' : 'bg-purple-800';
</script>

<svelte:window on:scroll={() => windowScroll = window.scrollY} />

<div class={`fixed top-0 left-0 w-full z-50 ${navbarClass} transition-all duration-300 ease-in-out`}>
    <div class="max-w-8xl w-full mx-auto flex items-center justify-start gap-12">
        <a href="#" class="text-2xl font-bold text-white">Logo</a>
        <div class="flex items-center justify-around gap-8 align-middle text-xl">
            <a href="#" class="text-white hover:text-white">Home</a>
        </div>
    </div>
</div>
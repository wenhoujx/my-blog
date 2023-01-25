<script>
    import MyNav from "./MyNav.svelte";
</script>

<main class="container">
    <MyNav />
    <div
        style="border-bottom: 5px solid var(--primary); margin-bottom: var(--spacing);"
    />
    <slot />
</main>

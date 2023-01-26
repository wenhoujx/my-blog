<script>
    import MyNav from "./MyNav.svelte";
</script>

<main class="container">
    <MyNav />
    <div
        style="border-bottom: 5px solid var(--primary); margin-bottom: var(--spacing);"
    />
    <slot />
    <footer
        style="text-align: right; margin-top: var(--typography-spacing-vertical);"
    >
        <small>
            Created by <a href="mailto:onepicodev@gmail.com">
                onepicodev@gmail.com
            </a>
        </small>
    </footer>
</main>

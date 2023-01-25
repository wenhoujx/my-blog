<script>
    export let imageSrc;
    export let figcaption = null;
</script>

<picture>
    <img src={imageSrc} {alt} loading="lazy" decoding="async" />

    {#if figcaption}
        <!-- svelte-ignore a11y-structure -->
        <figcaption>{@html figcaption}</figcaption>
    {/if}
</picture>

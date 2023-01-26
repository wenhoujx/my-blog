<script>
    export let src;
    export let figcaption = null;
    export let alt;
</script>

<div style="text-align: center; margin-bottom: var(--spacing);">
    <img {src} {alt} loading="lazy" decoding="async" style="width: 15rem;" />
</div>



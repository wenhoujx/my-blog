<script>
    import { _stringify } from "$lib/utils";
    export let data;
    const component = data.component;
    const frontmatter = data.frontmatter;
</script>

<article>
    <svelte:component this={component} />
</article>

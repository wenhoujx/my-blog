<script>
    import { _stringify } from "$lib/utils";
    export let data;
    const component = data.component;
    const frontmatter = data.frontmatter;
</script>

{_stringify(frontmatter)}
<svelte:component this={component} />

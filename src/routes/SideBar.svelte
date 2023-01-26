<script>
    import { filterPosts, _stringify } from "../lib/utils";
    import _ from "lodash";

    export let posts;
    let filterValue = "";
    $: filteredPosts = filterPosts(filterValue, posts);
</script>

<div style="text-align: center;">
    <h3>All Posts</h3>
</div>

<input
    style="border-radius: 0%;"
    type="search"
    bind:value={filterValue}
    placeholder="search..."
/>
<ul>
    {#each filteredPosts as post (post.id)}
        <li>
            <a href={"/post/" + post.id}>{post.title}</a>
        </li>
    {/each}
</ul>

<style>
    li:hover {
        background-color: var(--secondary-hover);
    }
</style>

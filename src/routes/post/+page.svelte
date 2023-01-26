<script>
    import { _stringify } from "$lib/utils";
    import _ from "lodash";
    import Boop from "$lib/components/Boop.svelte";
    import { filterPosts } from "../../lib/utils";

    export let data;
    const posts = data.posts;
    let filterValue = "";
</script>

<div style="text-align: center;">
    <h2>All my posts</h2>
</div>

<input bind:value={filterValue} type="search" placeholder="search..." />

<div class="grid">
    {#each filterPosts(filterValue, posts) as post (post.id)}
        <Boop>
            <article>
                <hgroup>
                    <h4>
                        <a href={"/post/" + post.id}>
                            {post.title}
                        </a>
                    </h4>
                    <h5>
                        {post.tags?.join(", ")}
                    </h5>
                </hgroup>
            </article>
        </Boop>
    {/each}
</div>

<style>
    .grid {
        display: grid;
        gap: var(--spacing);
        grid-template-columns: repeat(3, 1fr);
    }
</style>

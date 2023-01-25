<script>
    import { _stringify } from "$lib/utils";
    import Home from "./Home.md";
    import SideBar from "./SideBar.svelte";
    export let data;
</script>

<div class="grid">
    <section>
        <Home />
    </section>
    <aside>
        <SideBar posts={data.posts} />
    </aside>
</div>

<style>
    @media (min-width: 992px) {
        div.grid {
            grid-template-columns: auto 25%;
        }
    }
</style>

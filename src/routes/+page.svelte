<script>
    import { _stringify } from "$lib/utils";
    import Home from "./Home.md";
    import SideBar from "./SideBar.svelte";
    export let data;
</script>

<div class="grid">
    <article>
        <SideBar posts={data.posts} />
    </article>
    <article>
        <Home />
    </article>
</div>

<section aria-label="Subscribe example">
    <article>
        <hgroup>
            <h2>联系我</h2>
            <h3>
                <a href="mailto:onepicodev@gmail.com">onepicodev@gmail.com</a>
            </h3>
        </hgroup>
        <p>
            这是我写的一个网站: 帮助海外华人找到附近共同爱好的朋友: <a
                href="https://www.gojichat.com/"
            >
                gojichat.com
            </a>
        </p>
    </article>
</section>

<style>
    @media (min-width: 992px) {
        div.grid {
            grid-template-columns: auto 35%;
        }
    }
</style>

<script>
    import BoopAction from "$lib/components/BoopAction.svelte";
</script>

<nav>
    <ul>
        <BoopAction boopParams={{ rotation: 10, timing: 200 }}>
            <li>
                <a href="/">
                    <img src="/goji.png" alt="goji blog" style="width:2rem" />
                    <h5 style="display: inline; color: #ff8087">GojiWrite</h5>
                </a>
            </li>
        </BoopAction>

        <BoopAction boopParams={{ rotation: 10, timing: 200 }}>
            <li>
                <a href="/post">帖子 </a>
            </li>
        </BoopAction>
    </ul>
</nav>

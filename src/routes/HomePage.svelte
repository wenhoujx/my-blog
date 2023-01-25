<script>
    import { _stringify, _log, getPosts } from "$lib/utils";
    const posts = getPosts();
</script>

{_stringify(posts)}

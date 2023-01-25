export const _stringify = (o) => {
    return JSON.stringify(o);
}

export const _log = (s) => {
    true && console.log(s);
}


export const slugFromPath = (path) => { return path.match(/([\w-]+)\.md/i)?.[1] ?? null; }

export const onePost = async (postId) => {
    const modules = import.meta.glob(`$lib/posts/*.md`);
    let match = {};
    for (const [path, resolver] of Object.entries(modules)) {
        if (slugFromPath(path) === postId) {
            match = { path, resolver };
            break;
        }
    }

    const post = await match?.resolver?.();

    if (!post || !post.metadata.published) {
        throw error(404); // Couldn't resolve the post
    }

    return {
        component: post.default,
        frontmatter: post.metadata
    };
}
export const allPosts = async () => {
    const modules = import.meta.glob(`$lib/posts/*.md`);

    const postPromises = Object.entries(modules).map(([path, resolver]) =>
        resolver().then(
            (post) =>
            ({
                id: slugFromPath(path),
                ...post.metadata
            })
        )
    );

    const posts = await Promise.all(postPromises);
    _log(_stringify(posts))
    const publishedPosts = posts.filter(post => post.published).sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

    return { posts: publishedPosts };
}

export const filterPosts = (filterValue, posts) => {
    return posts.filter((p) => {
        if (!filterValue || filterValue === "") {
            return true;
        }
        if (_.includes(p.title.toLowerCase(), filterValue.toLowerCase())) {
            return true;
        } else if (
            _.some(p.tags, (t) =>
                _.includes(t.toLowerCase(), filterValue.toLowerCase())
            )
        ) {
            return true;
        } else {
            return false;
        }
    });
}

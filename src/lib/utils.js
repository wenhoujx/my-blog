export const _stringify = (o) => {
    return JSON.stringify(o);
}

export const _log = (s) => {
    true && console.log(s);
}

export const getPosts = () => {
    // Import the markdown files for each post
    const imports = import.meta.glob("$lib/posts/*.md", { eager: true });
    const posts = [];
    
    for (const path in imports) {
        const post = imports[path];
        if (post) {
            _log(_stringify(post));
            // For each of them, MDsveX will do the heavy lifting. The "metadata"
            // is automatically recovered from the Frontmatter, and we're also
            // asking it to render the blog post so we're able to use it
            // as a component later on.
            posts.push({
                ...post.metadata,
                ...post.default.render(),
            });
        }
    }

    // Filter the post and order them by published date
    const filteredPosts = posts
        .filter((post) => !post.hidden)
        .sort((a, b) =>
            new Date(a.date).getTime() > new Date(b.date).getTime()
                ? -1
                : new Date(a.date).getTime() < new Date(b.date).getTime()
                    ? 1
                    : 0
        );
    return filteredPosts;
}


export const slugFromPath = (path) =>
	path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

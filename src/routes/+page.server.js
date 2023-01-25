import { slugFromPath } from "../lib/utils";
const MAX_POSTS = 10;

export const load = async ({ url }) => {
    const modules = import.meta.glob(`$lib/posts/*.md`);

    const postPromises = Object.entries(modules).map(([path, resolver]) =>
        resolver().then(
            (post) =>
            ({
                slug: slugFromPath(path),
                ...post.metadata
            })
        )
    );

    const posts = await Promise.all(postPromises);

    const publishedPosts = posts.filter(post => post.published).sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

    return { posts: publishedPosts };
};

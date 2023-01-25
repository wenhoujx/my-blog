import { slugFromPath, _log } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const modules = import.meta.glob(`$lib/posts/*.md`);
    _log('here')
    let match = {};
    for (const [path, resolver] of Object.entries(modules)) {
        if (slugFromPath(path) === params.slug) {
            _log('found')
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
};

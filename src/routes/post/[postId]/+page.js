import { slugFromPath, _log } from '$lib/utils';
import { error } from '@sveltejs/kit';
import { onePost } from "$lib/utils";

export const load = async ({ params }) => {
    return onePost(params.postId)
};

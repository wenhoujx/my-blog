import { onePost } from "$lib/utils";

export const load = async ({ params }) => {
    return onePost(params.postId)
};

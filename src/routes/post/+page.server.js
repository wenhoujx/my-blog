import { allPosts } from "../../lib/utils"

export const load = async ({ url }) => {
    return allPosts()
}

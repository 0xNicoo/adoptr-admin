import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getPostsCount() {
    return await apiRequest(`/post/count`, 'GET', null, 'application/json', true)
}
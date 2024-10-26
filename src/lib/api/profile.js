import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getProfileCount() {
    return await apiRequest(`/profile/count`, 'GET', null, 'application/json', true)
}
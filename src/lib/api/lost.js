import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getLostCount() {
    return await apiRequest(`/lost/count`, 'GET', null, 'application/json', true)
}
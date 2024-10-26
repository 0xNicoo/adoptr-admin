import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getPublicationCount() {
    return await apiRequest(`/publication/count`, 'GET', null, 'application/json', true)
}
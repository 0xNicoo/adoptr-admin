import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getServiceCount() {
    return await apiRequest(`/service/count`, 'GET', null, 'application/json', true)
}
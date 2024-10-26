import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getAdoptedCount() {
    return await apiRequest(`/adoption/count/adopted`, 'GET', null, 'application/json', true)
}

export async function getForAdoptionCount() {
    return await apiRequest(`/adoption/count/foradoption`, 'GET', null, 'application/json', true)
}
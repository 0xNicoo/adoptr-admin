import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getDonations(){
    return await apiRequest(`/donation`, 'GET', null, 'application/json', true)
}
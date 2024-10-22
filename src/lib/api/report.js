import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getPublicationReports(){
    return await apiRequest(`/report/publication`, 'GET', null, 'application/json', true)
}

export async function getProfileReports() {
    return await apiRequest(`/report/profile`, 'GET', null, 'application/json', true)
}
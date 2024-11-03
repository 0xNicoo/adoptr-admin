import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getSummary(){
    return await apiRequest(`/statistics/summary`, 'GET', null, 'application/json', true)
}

export async function getReportSummary(){
    return await apiRequest(`/statistics/report/summary`, 'GET', null, 'application/json', true)
}
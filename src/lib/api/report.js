import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getPublicationReports(){
    return await apiRequest(`/report/publication`, 'GET', null, 'application/json', true)
}

export async function getPublicationReportsByModelId(publicationId){
    return await apiRequest(`/report/publication/${publicationId}`, 'GET', null, 'application/json', true)
}

export async function getProfileReports() {
    return await apiRequest(`/report/profile`, 'GET', null, 'application/json', true)
}

export async function getProfileReportsByModelId(profileId){
    return await apiRequest(`/report/profile/${profileId}`, 'GET', null, 'application/json', true)
}

export async function getPostReports() {
    return await apiRequest(`/report/post`, 'GET', null, 'application/json', true)
}

export async function getPostReportsByModelId(postId){
    return await apiRequest(`/report/post/${postId}`, 'GET', null, 'application/json', true)
}
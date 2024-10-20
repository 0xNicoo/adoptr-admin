import 'server-only'
import { apiRequest } from '../apiRequest'

export async function loginAPI(data){
    return await apiRequest(`/auth/login`, 'POST', data, 'application/json', false)
}

export async function  registerAPI(data) {
    return await apiRequest(`/auth/register`, 'POST', data, 'application/json', false)
}
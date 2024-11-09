import 'server-only'
import { apiRequest } from '../apiRequest'

export async function getServiceTypes() {
    return await apiRequest(`/serviceType?page=0&size=20`, 'GET', null, 'application/json', true)
  }

export async function createServiceType(formData) { 
  return await apiRequest(`/serviceType`, 'POST', formData, 'multipart/form-data', true)
}

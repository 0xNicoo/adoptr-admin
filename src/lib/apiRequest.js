import 'server-only';

import { getValidToken } from "@/util/token";

export async function apiRequest(endpoint, method = 'GET', body = null, contentType = 'application/json', requiresAuth = true) {
    let token;

    if (requiresAuth) {
      token = await getValidToken();
    }

    const url = new URL(`http://localhost:8080${endpoint}`)
  
    const options = {
      method,
      headers: {}
    }

    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    if(contentType == 'application/json'){
      options.headers['Content-Type'] = 'application/json'
    }

    if (body) {
      options.body = contentType === 'application/json' ? JSON.stringify(body) : body
    }
  
    const res = await fetch(url, options)
  
    if (!res.ok) {
      const errorData = await res.json()
      console.log(errorData)
      throw new Error(`${errorData.message || 'Error desconocido'}`)
    }
  
    const isJson = res.headers.get('content-type')?.includes('application/json')
    const data = isJson ? await res.json() : null
    
    return {
      data,
      headers: {
        totalCount: res.headers.get('x-total-count'),
        contentType: res.headers.get('content-type'),
      },
    }
  }

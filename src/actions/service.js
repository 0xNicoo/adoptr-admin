'use server'

import { getServiceTypes, createServiceType } from "@/lib/api/service"

export async function getServiceTypesAction() {
    const {data, headers} = await getServiceTypes()
    return data
  }

export async function createServiceTypesAction(formData) {
    const {data, headers} = await createServiceType(formData)
    return data
  } 
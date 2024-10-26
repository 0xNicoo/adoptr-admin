'use server'
import { getServiceCount } from "@/lib/api/service"

export async function getServiceCountAction() {
    const {data, headers} = await getServiceCount()
    return data
}
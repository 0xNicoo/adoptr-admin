'use server'
import { getAdoptedCount, getForAdoptionCount } from "@/lib/api/adoption"

export async function getAdoptedCountAction() {
    const {data, headers} = await getAdoptedCount()
    return data
}

export async function getForAdoptionCountAction() {
    const {data, headers} = await getForAdoptionCount()
    return data
}
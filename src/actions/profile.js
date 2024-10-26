'use server'
import { getProfileCount } from "@/lib/api/profile"

export async function getProfileCountAction () {
    const { data, headers } = await getProfileCount()
    return data
}
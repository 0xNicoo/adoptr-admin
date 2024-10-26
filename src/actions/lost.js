'use server'
import { getLostCount } from "@/lib/api/lost"

export async function getLostCountAction(){
    const {data, headers} = await getLostCount()
    return data
}
'use server'
import { getPublicationCount } from "@/lib/api/publication"

export async function getPublicationCountAction(){
   const {data, headers} = await getPublicationCount()
   return data
}
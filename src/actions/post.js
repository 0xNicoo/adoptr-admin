'use server'
import { getPostsCount } from "@/lib/api/post"

export async function getPostsCountAction(){
   const {data, headers} = await getPostsCount()
   return data
}
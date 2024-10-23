'use server'

import { getPublicationReports } from "@/lib/api/report"
import { getProfileReports } from "@/lib/api/report"
import { getPostReports } from "@/lib/api/report"

export async function getPublicationReportsAction(){
   const {data, headers} = await getPublicationReports()
   console.log(data)
   return data
}

export async function getProfileReportsAction(){
   const {data, headers} = await getProfileReports()
   console.log(data)
   return data
}

export async function getPostReportsAction(){
   const {data, headers} = await getPostReports()
   console.log(data)
   return data
}
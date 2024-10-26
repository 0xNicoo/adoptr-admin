'use server'

import { getPublicationReports } from "@/lib/api/report"
import { getProfileReports } from "@/lib/api/report"
import { getPostReports } from "@/lib/api/report"
import { getStats } from "@/lib/api/report"

export async function getPublicationReportsAction(){
   const {data, headers} = await getPublicationReports()
   return data
}

export async function getProfileReportsAction(){
   const {data, headers} = await getProfileReports()
   return data
}

export async function getPostReportsAction(){
   const {data, headers} = await getPostReports()
   return data
}

export async function getStatsAction(){
   const {data, headers} = await getStats()
   return data
}
'use server'

import { getPublicationReports, getPublicationReportsByModelId } from "@/lib/api/report"
import { getProfileReports, getProfileReportsByModelId } from "@/lib/api/report"
import { getPostReports, getPostReportsByModelId } from "@/lib/api/report"
import { getStats } from "@/lib/api/report"

export async function getPublicationReportsAction(){
   const {data, headers} = await getPublicationReports()
   return data
}

export async function getPublicationReportsByModelIdAction(publicacion){
   const {data, headers} = await getPublicationReportsByModelId(publicacion)
   return data
}

export async function getProfileReportsAction(){
   const {data, headers} = await getProfileReports()
   return data
}

export async function getProfileReportsByModelIdAction(perfil){
   const {data, headers} = await getProfileReportsByModelId(perfil)
   return data
}

export async function getPostReportsAction(){
   const {data, headers} = await getPostReports()
   return data
}

export async function getPostReportsByModelIdAction(post){
   const {data, headers} = await getPostReportsByModelId(post)
   return data
}

export async function getStatsAction(){
   const {data, headers} = await getStats()
   return data
}
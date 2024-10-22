'use server'

import { getPublicationReports } from "@/lib/api/report"

export async function getPublicationReportsAction(){
   const {data, headers} = await getPublicationReports()
   console.log(data)
   return data
}
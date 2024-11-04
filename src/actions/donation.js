'use server'

import { getDonations } from "@/lib/api/donation"


export async function getDonationsAction(){
   const {data, headers} = await getDonations()
   return data
}
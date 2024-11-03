'use server'

import { getReportSummary, getSummary } from "@/lib/api/statistics"

export async function getSummaryAction() {
    const {data, headers} = await getSummary()
    return data
}

export async function getReportSummaryAction() {
    const {data, headers} = await getReportSummary()
    return data
}
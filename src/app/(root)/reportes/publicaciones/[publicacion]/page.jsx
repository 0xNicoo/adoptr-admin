'use client'

import { getPublicationReportsByModelIdAction } from "@/actions/report"
import CustomLoading from "@/app/components/customLoading"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const PublicationReports = () => {
    const [reports, setReports] = useState([])
    const [loading, setLoading] = useState(true)
    const {publicacion} = useParams()

    useEffect(() => {
        const fetchPublicationReports = async () => {
            try{
                console.log("PUBLICACION: ", Number(publicacion))
                const data = await getPublicationReportsByModelIdAction(publicacion)
                setReports(data)
                setLoading(false)
            }catch(err){
                console.log(err)
            }
        }
        fetchPublicationReports()
    }, [])

    if (loading) return <CustomLoading />;

    return(    
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-4">Reportes de publicacion: {publicacion}</h1>
            <hr className="w-full border-t mb-8" />
            <table className="w-full table-auto">
            <thead>
                <tr className="text-left">
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Razon</th>
                <th className="px-4 py-2">Descripcion</th>
                <th className="px-4 py-2">Usuario que reporto</th>
                <th className="px-4 py-2">Fecha</th>
                </tr>
            </thead>
            <tbody>
                {reports.map((report) => (
                <tr key={report.id} className="bg-white shadow-md hover:bg-gray-300 border my-2">
                    <td className="px-4 py-2">{report.id}</td>
                    <td className="px-4 py-2"> {report.reason ? <>{report.reason.reason}</> : "-"}</td> 
                    <td className="px-4 py-2"> {report.reason ? <>{report.reason.description}</> : "-"}</td> 
                    <td className="px-4 py-2"> {report.reporterUserId}</td> 
                    <td className="px-4 py-2">{report.createdAt}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
  )
}

export default PublicationReports
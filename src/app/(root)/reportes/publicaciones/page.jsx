'use client'

import { getPublicationReportsAction } from '@/actions/report';
import CustomLoading from '@/app/components/customLoading';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import React from 'react';

const Publications = () => {
  const [reportedPublications, setReportedPublications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReportedPublications = async () => {
      try{
        const reportData = await getPublicationReportsAction()
        setReportedPublications(reportData)
        setLoading(false)
      }catch(err){
        console.log(err)
      }
    }
    fetchReportedPublications()
  }, [])

  if (loading) return <CustomLoading />;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Publicaciones reportadas</h1>
      <hr className="w-full border-t mb-8" />
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Título</th>
            <th className="px-4 py-2">Usuario</th>
            <th className="px-4 py-2">Reportes</th>
          </tr>
        </thead>
        <tbody>
          {reportedPublications.map((pubReport) => (
            <tr key={pubReport.publication.id} className="bg-white shadow-md hover:bg-gray-300 border my-2">
              <td className="px-4 py-2">{pubReport.publication.id}</td>
              <td className="px-4 py-2">{pubReport.publication.title}</td>
              <td className="px-4 py-2">{pubReport.publication.user.email}</td>
              <td className="px-4 py-2 flex justify-between items-center">
                <span>{pubReport.reportCount}</span>
                <ArrowTopRightOnSquareIcon 
                className="h-6 w-6 text-black ml-2 cursor-pointer" 
                onClick={() => window.open(pubReport.url, '_blank')} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Publications;

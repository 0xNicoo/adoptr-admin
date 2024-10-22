'use client'

import { getProfileReportsAction } from '@/actions/report';
import CustomLoading from '@/app/components/customLoading';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

 const Profiles = () => {
  const [reportedProfiles, setReportedProfiles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReportedProfiles = async () => {
      try{
        const reportData = await getProfileReportsAction()
        setReportedProfiles(reportData)
        setLoading(false)
      }catch(err){
        console.log(err)
      }
    }
    fetchReportedProfiles()
  }, [])

  if (loading) return <CustomLoading />;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Perfiles Reportados</h1>
      <hr className="w-full border-t mb-8" />
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Apellido</th>
            <th className="px-4 py-2">Reportes</th>
          </tr>
        </thead>
        <tbody>
          {reportedProfiles.map((profReport) => (
            <tr key={profReport.profile.id} className="bg-white shadow-md hover:bg-gray-300 border my-2">
              <td className="px-4 py-2">{profReport.profile.id}</td>
              <td className="px-4 py-2">{profReport.profile.firstName}</td>
              <td className="px-4 py-2">{profReport.profile.lastName}</td>
              <td className="px-4 py-2 flex justify-between items-center">
                <span>{profReport.reportCount}</span>
                <ArrowTopRightOnSquareIcon 
                className="h-6 w-6 text-black ml-2 cursor-pointer" 
                onClick={() => window.open(profReport.url, '_blank')} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Profiles;

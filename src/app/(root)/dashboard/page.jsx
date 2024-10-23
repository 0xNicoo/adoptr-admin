// export default function Dashboard() {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//         <h1 className="text-4xl font-bold mb-8">Adoptr dashboard</h1>
        
//         <hr className="w-2/3 border-t mb-8" />
        
//         <div className="grid grid-cols-3 gap-8">
//           <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
//             <span className="text-lg">Publicaciones reportadas</span>
//             <span className="text-red-600 text-4xl font-bold">4</span>
//           </div>

//           <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
//             <span className="text-lg">Perfiles reportados</span>
//             <span className="text-red-600 text-4xl font-bold">2</span>
//           </div>
//           <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
//             <span className="text-lg">Post reportados</span>
//             <span className="text-red-600 text-4xl font-bold">10</span>
//           </div>
//           <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
//             <span className="text-lg">Publicaciones de adopcion reportadas</span>
//             <span className="text-red-600 text-4xl font-bold">2</span>
//           </div>
//           <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
//             <span className="text-lg">Publicaciones de perdidas reportadas</span>
//             <span className="text-red-600 text-4xl font-bold">1</span>
//           </div>
//           <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
//             <span className="text-lg">Publicaciones de servicios reportadas</span>
//             <span className="text-red-600 text-4xl font-bold">1</span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// TODO: DEJO EL ANTERIOR POR LAS DUDAS, ESTA ATADO CON ALAMBRES EL Q HICE, SEGURO HAY UNA MEJOR FORMA DE HACERLO



'use client';

import { useEffect, useState } from 'react';
import { getProfileReportsAction, getPostReportsAction } from '@/actions/report';
import CustomLoading from '@/app/components/customLoading';

export default function Dashboard() {
  const [totalReportedProfiles, setTotalReportedProfiles] = useState(0);
  const [totalReportedPosts, setTotalReportedPosts] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReportedProfiles = async () => {
      try {
        const reportData = await getProfileReportsAction();
        setTotalReportedProfiles(reportData.length);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReportedProfiles();
  }, []);

  useEffect(() => {
    const fetchReportedPosts = async () => {
      try {
        const reportData = await getPostReportsAction();
        setTotalReportedPosts(reportData.length);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReportedPosts();
  }, []);

  if (loading) return <CustomLoading />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Adoptr dashboard</h1>
      <hr className="w-2/3 border-t mb-8" />
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-lg">Publicaciones reportadas</span>
          <span className="text-red-600 text-4xl font-bold">4</span>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-lg">Perfiles reportados</span>
          <span className="text-red-600 text-4xl font-bold">{totalReportedProfiles}</span>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-lg">Post reportados</span>
          <span className="text-red-600 text-4xl font-bold">{totalReportedPosts}</span>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-lg">Publicaciones de adopción reportadas</span>
          <span className="text-red-600 text-4xl font-bold">2</span>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-lg">Publicaciones de pérdidas reportadas</span>
          <span className="text-red-600 text-4xl font-bold">1</span>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-lg">Publicaciones de servicios reportadas</span>
          <span className="text-red-600 text-4xl font-bold">1</span>
        </div>
      </div>
    </div>
  );
}

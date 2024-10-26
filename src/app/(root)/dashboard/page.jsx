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
import { getProfileReportsAction, getPostReportsAction, getStatsAction } from '@/actions/report';
import { getPostsCountAction } from '@/actions/post';
import { getAdoptedCountAction, getForAdoptionCountAction } from '@/actions/adoption';
import { getServiceCountAction } from '@/actions/service';
import { getLostCountAction } from '@/actions/lost';
import CustomLoading from '@/app/components/customLoading';
import { Inter } from "next/font/google";

const inter = Inter(
  {subsets: ['latin']},
  {weight: '400, 500, 600, 700'}
)

export default function Dashboard() {
  const [totalReportedProfiles, setTotalReportedProfiles] = useState(0);
  const [totalReportedPosts, setTotalReportedPosts] = useState(0);
  const [ postsCount, setPostsCount ] = useState([]);
  const [ adoptedCount, setAdoptedCount ] = useState([]);
  const [ forAdoptionCount, setForAdoptionCount ] = useState([]);
  const [ lostCount, setLostCount ] = useState([]);
  const [ serviceCount, setServiceCount ] = useState([]);
  const [stats, setStats] = useState({});
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

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const statsData = await getStatsAction();
        setStats(statsData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    const fetchPostsCount = async () => {
      try {
        const postsCountData = await getPostsCountAction();
        setPostsCount(postsCountData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPostsCount();
  }, []);

  useEffect(() => {
    const fetchAdoptedCount = async () => {
      try {
        const adoptedCountData = await getAdoptedCountAction();
        setAdoptedCount(adoptedCountData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAdoptedCount();
  }, []);

  useEffect(() => {
    const fetchForAdoptionCount = async () => {
      try {
        const forAdoptionCountData = await getForAdoptionCountAction();
        setForAdoptionCount(forAdoptionCountData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchForAdoptionCount();
  }, []);

  useEffect(() => {
    const fetchLostCount = async () => {
      try {
        const lostCountData = await getLostCountAction();
        setLostCount(lostCountData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLostCount();
  }, []);

  useEffect(() => {
    const fetchServiceCount = async () => {
      try {
        const serviceCountData = await getServiceCountAction();
        setServiceCount(serviceCountData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchServiceCount();
  }, []);

  if (loading) return <CustomLoading />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className={`${inter.className} text-4xl font-bold text-secondary-blue mb-8`}>Adoptr dashboard</h1>
      <hr className="w-2/3 border-t mb-8" />
      <h2 className={`${inter.className} mb-4 text-secondary-blue text-xl font-medium`}>Reportes</h2>
      <div className={`${inter.className} grid grid-cols-3 gap-8 mx-4 w-3/4`}>
      <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <span className="text-md">Publicaciones reportadas</span>
          <span className="text-red-600 text-4xl font-bold">
            {stats.totalPublicationsReported}
          </span>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <span className="text-md">Perfiles reportados</span>
          <span className="text-red-600 text-4xl font-bold">{totalReportedProfiles}</span>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <span className="text-md">Posts reportados</span>
          <span className="text-red-600 text-4xl font-bold">{totalReportedPosts}</span>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <span className="text-md">Publicaciones de adopción reportadas</span>
          <span className="text-red-600 text-4xl font-bold">
            {stats.adoptionReported}
          </span>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <span className="text-md">Publicaciones de pérdidas reportadas</span>
          <span className="text-red-600 text-4xl font-bold">
            {stats.lostReported}
          </span>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <span className="text-md">Publicaciones de servicios reportadas</span>
          <span className="text-red-600 text-4xl font-bold">
            {stats.serviceReported}
          </span>
        </div>
      </div>
      <h2 className={`${inter.className} mt-8 mb-4 text-secondary-blue text-xl font-medium`}>Estadísticas</h2>
      <div className={`${inter.className} grid grid-cols-3 gap-8 mb-8 mx-4 w-3/4`}>
      <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <span className="text-md">Publicaciones activas</span>
          <span className="text-red-600 text-4xl font-bold">
            {stats.serviceReported}
          </span>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center justify-center text-center">
          <span className="text-md">Perfiles activos</span>
          <span className="text-red-600 text-4xl font-bold">
            {stats.serviceReported}
          </span>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-md">Posts activos</span>
          <span className="text-red-600 text-4xl font-bold">
            {postsCount}
          </span>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-md">Animales en adopción</span>
          <span className="text-red-600 text-4xl font-bold">
            {forAdoptionCount}
          </span>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-md">Animales adoptados</span>
          <span className="text-red-600 text-4xl font-bold">
            {adoptedCount}
          </span>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-md">Publicaciones de servicios</span>
          <span className="text-red-600 text-4xl font-bold">
            {serviceCount}
          </span>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center">
          <span className="text-md">Publicaciones de mascotas perdidas</span>
          <span className="text-red-600 text-4xl font-bold">
            {lostCount}
          </span>
        </div>
      </div>
    </div>
  );
}

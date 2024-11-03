'use client';

import { useEffect, useState } from 'react';
import CustomLoading from '@/app/components/customLoading';
import { Inter } from "next/font/google";
import { getReportSummaryAction, getSummaryAction } from '@/actions/statistics';
import Pannel from './components/pannel';

const inter = Inter(
  {subsets: ['latin']},
  {weight: '400, 500, 600, 700'}
)

export default function Dashboard() {
  const [summary, setSummary] = useState(new Map())
  const [reportSummary, setReportSummary] = useState(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const dataSummary = await getSummaryAction()
        const summaryMap = new Map(Object.entries(dataSummary))
        setSummary(summaryMap)
        const dataReportSummary = await getReportSummaryAction();
        const reportSummaryMap = new Map(Object.entries(dataReportSummary))
        setReportSummary(reportSummaryMap);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <CustomLoading />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className={`${inter.className} text-4xl font-bold text-secondary-blue`}>Adoptr dashboard</h1>
      <hr className="w-2/3 border-t my-8" />
      <Pannel title={"Estadísticas"} cardsMap={summary} dataColor={"text-green-600"}/>
      <hr className="w-2/3 border-t my-8" />
      <Pannel title={"Reportes"} cardsMap={reportSummary} dataColor={"text-red-600"}/>
    </div>
  );
}
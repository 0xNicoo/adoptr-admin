'use client'

import { getPostReportsAction } from '@/actions/report';
import CustomLoading from '@/app/components/customLoading';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import React from 'react';

const Posts = () => {
  const [reportedPosts, setReportedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReportedPosts = async () => {
      try {
        const reportData = await getPostReportsAction();
        setReportedPosts(reportData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReportedPosts();
  }, []);

  if (loading) return <CustomLoading />;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Posts reportadas</h1>
      <hr className="w-full border-t mb-8" />
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Usuario</th>
            <th className="px-4 py-2">Reportes</th>
          </tr>
        </thead>
        <tbody>
          {reportedPosts.map((posReport) => (
            <tr key={posReport.post.id} className="bg-white shadow-md hover:bg-gray-300 border my-2">
              <td className="px-4 py-2">{posReport.post.id}</td>
              <td className="px-4 py-2">
                <DescriptionWithReadMore description={posReport.post.description} />
              </td>
              <td className="px-4 py-2">{posReport.post.user.email}</td>
              <td className="px-4 py-2 flex justify-between items-center">
                <span>{posReport.reportCount}</span>
                <ArrowTopRightOnSquareIcon
                  className="h-6 w-6 text-black ml-2 cursor-pointer"
                  onClick={() => window.open(posReport.url, '_blank')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DescriptionWithReadMore = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded ? description : `${description.slice(0, 40)}`}
        {description.length > 40 && (
          <button
            className="text-blue-500 ml-2"
            onClick={toggleReadMore}
          >
            {isExpanded ? 'Ver menos' : 'Ver más'}
          </button>
        )}
      </p>
    </div>
  );
};

export default Posts;

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const QuestionBankPage = () => {
  const [questions, setQuestions] = useState<any[]>([]); // To hold the question bank data
  const [loading, setLoading] = useState<boolean>(true); // To handle loading state
  const [error, setError] = useState<string>(''); // To handle error state
  const router = useRouter(); // Accessing the router

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:3000/question-bank', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming the token is stored in localStorage
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error: any) {
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Header with Go Back Button aligned to the left */}
      <div className="flex items-center justify-between mb-4">
        {/* Go Back Button */}
        <button
          onClick={() => router.back()} // Go back to the previous page
          className="p-2 bg-sky-300 text-white rounded-md hover:bg-red-500 transition duration-300 mr-[10px]"
        >
          Go Back
        </button>

        {/* 3D Title with Gradient and Shadow */}
        <h1 className="text-3xl font-extrabold text-gray-800 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition duration-300 flex-grow text-center">
          Question Bank
        </h1>
      </div>

      {/* Content Background with Gradient */}
      <div className="overflow-x-auto bg-gradient-to-r from-blue-200 to-purple-300 rounded-lg shadow-2xl p-6">
        {/* Table with floating effect and rounded corners */}
        <table className="min-w-full table-auto text-sm transform transition duration-300 rounded-lg overflow-hidden">
          {/* Table Header with Gradient */}
          <thead className="bg-gradient-to-r from-blue-800 to-purple-500 text-white">
            <tr>
              <th className="px-6 py-4 w-[1cm]"></th> {/* Blank column with 1 cm width */}
              <th className="px-6 py-4 text-left">Subject</th>
              <th className="px-6 py-4 text-left">Google Form Link</th>
            </tr>
          </thead>
          
          {/* Table Rows */}
          <tbody className="bg-white">
            {questions.length > 0 ? (
              questions.map((question: any) => (
                <tr
                  key={question.id}
                  className="border-b hover:bg-[#baeaff] hover:text-black hover:shadow-xl hover:scale-105 hover:translate-y-1 transform transition duration-300"
                >
                  <td className="px-6 py-4 w-[1cm]"></td> {/* Blank column with 1 cm width */}
                  <td className="px-6 py-4">{question.subject}</td>
                  <td className="px-6 py-4">
                    <a
                      href={question.googleFormLink}
                      target="_blank"
                      className="text-blue-500 hover:text-red-700 hover:underline"
                    >
                      {question.googleFormLink}
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  No questions available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionBankPage;

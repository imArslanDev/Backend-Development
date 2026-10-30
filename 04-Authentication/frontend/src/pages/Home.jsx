import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle'; // Adjust path if needed

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 font-sans relative transition-colors duration-200">
      <ThemeToggle />
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-none p-8 text-center border border-transparent dark:border-gray-700">
        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome to Our Platform</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
          Get started by logging into your existing account or creating a new one to explore all features.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup" className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition-colors shadow-md text-center no-underline">
            Create Account
          </Link>
          <Link to="/login" className="py-3 px-6 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-500 font-semibold rounded-lg text-sm transition-colors text-center no-underline shadow-sm">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
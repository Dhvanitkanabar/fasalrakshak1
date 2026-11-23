import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Sprout } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex-1 min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#f0f9f1]/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-green-100"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-green-50 rounded-2xl flex items-center justify-center border border-green-200">
          <Sprout className="w-10 h-10 text-green-600" />
        </div>

        <span className="inline-block text-xs font-nunito font-bold text-green-700 bg-green-100/70 uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          Error 404
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>

        <p className="font-nunito text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
          The page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1A6B2F] hover:bg-[#155824] text-white font-nunito font-bold text-sm shadow-md shadow-green-900/10 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 hover:border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-700 font-nunito font-semibold text-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;

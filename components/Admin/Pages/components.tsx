import React from 'react';
import { motion } from 'framer-motion';

export function Pages({ pageOptions, icons, selectedPage, selectPage }) {
  return (
    <div className="flex gap-10 my-8 mb-4 flex-wrap">
      {pageOptions.map((option, idx) => (
        <button
          key={option}
          className={
            'flex flex-col items-center group text-3xl md:text-2xl bg-transparent ' +
            (selectedPage === option
              ? 'font-semibold'
              : 'font-medium text-sub-highlight hover:text-text')
          }
          onClick={() => {
            selectPage(option);
          }}
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 py-1.5"
          >
            <div>{icons[idx]}</div>
            <span className="hidden md:block">{option}</span>
          </motion.div>
        </button>
      ))}
    </div>
  );
}

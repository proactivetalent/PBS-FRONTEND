'use client';
import React, { useState, useEffect } from 'react';
import { getIdFromBoro } from '@/utils/borough';

export default function PropertySummary({ properties = [], entries = 10, search = '' }) {
  const [currentPage, setCurrentPage] = useState(1);
  // reset page when dependencies change
  useEffect(() => { setCurrentPage(1); }, [entries, search, properties]);

  // Prepare formatted list (full address) and filter safely
  const term = (search || '').toLowerCase();
  // prepare and filter
  const formatted = properties.map(p => ({
    item: p,
    addr: `${p.house_number} ${p.stname} ${getIdFromBoro(parseInt(p.boro))}`
  }));
  const filtered = formatted.filter(({ addr }) => addr.toLowerCase().includes(term));
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / entries));
  const startIdx = (currentPage - 1) * entries;
  const current = filtered.slice(startIdx, startIdx + entries);
  // calculate totals on current page
  const filteredTotals = current.reduce((acc, { item: p }) => {
    acc.dobViol += p.dob_violations_count || 0;
    acc.dobComp += p.dob_complaints_count || 0;
    acc.ecbHear += p.oath_hearings_count || 0;
    acc.ecbPena += p.summary?.total_penalty ?? 0;
    acc.hpdViol += p.hpd_violations_count || 0;
    acc.hpdComp += p.hpd_complaints_count || 0;
    acc.hpdRepa += p.hpd_repairs_count || 0;
    return acc;
  }, { dobViol: 0, dobComp: 0, ecbHear: 0, ecbPena: 0, hpdViol: 0, hpdComp: 0, hpdRepa: 0 });

  return (
    <>
    <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full overflow-x-auto custom-scrollbar">
      <table className="w-full text-[#D9D9D9] text-center">
        <thead>
          <tr className="border-b-2 border-[#8AD5B7]">
            <th className="px-2 py-4">ADDRESS</th>
            <th className="px-2 py-4">DOB Viol.</th>
            <th className="px-2 py-4">DOB Comp.</th>
            <th className="px-2 py-4">ECB Hear.</th>
            <th className="px-2 py-4">ECB Pena.</th>
            <th className="px-2 py-4">HPD Viol.</th>
            <th className="px-2 py-4">HPD Comp.</th>
            <th className="px-2 py-4">HPD Repa.</th>
          </tr>
        </thead>
        <tbody>
          {current.length > 0 ? (
            current.map(({ item: p, addr }, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-[#2E3734]' : ''}>
                <td className="border-x-2 border-[#8AD5B7] py-3">{addr}</td>
                <td className="border-x-2 border-[#8AD5B7] py-3">{p.dob_violations_count}</td>
                <td className="border-x-2 border-[#8AD5B7] py-3">{p.dob_complaints_count}</td>
                <td className="border-x-2 border-[#8AD5B7] py-3">{p.oath_hearings_count}</td>
                <td className="border-x-2 border-[#8AD5B7] py-3">${(p.summary?.total_penalty ?? 0).toFixed(2)}</td>
                <td className="border-x-2 border-[#8AD5B7] py-3">{p.hpd_violations_count}</td>
                <td className="border-x-2 border-[#8AD5B7] py-3">{p.hpd_complaints_count}</td>
                <td className="border-x-2 border-[#8AD5B7] py-3">{p.hpd_repairs_count}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="py-6 text-[#89A096]">
                No properties found.
              </td>
            </tr>
          )}
          <tr className="font-semibold border-t-2 border-[#8AD5B7] text-[#D9D9D9]">
            <td className="py-3">Total</td>
            <td className="py-3">{filteredTotals.dobViol}</td>
            <td className="py-3">{filteredTotals.dobComp}</td>
            <td className="py-3">{filteredTotals.ecbHear}</td>
            <td className="py-3">${filteredTotals.ecbPena.toFixed(2)}</td>
            <td className="py-3">{filteredTotals.hpdViol}</td>
            <td className="py-3">{filteredTotals.hpdComp}</td>
            <td className="py-3">{filteredTotals.hpdRepa}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="flex justify-between items-center w-full mx-auto text-[#89A096] font-semibold text-lg xl:text-xl px-2 py-8">
      <p>Showing {total ? startIdx + 1 : 0} to {Math.min(startIdx + entries, total)} of {total} entries</p>
      <div className="flex items-center gap-4">
        <button
          className="hover:text-[#8AD5B7] disabled:text-gray-300"
          onClick={() => setCurrentPage(p => Math.max(1, p-1))}
          disabled={currentPage<=1}
        >Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button
          className="hover:text-[#8AD5B7] disabled:text-gray-300"
          onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))}
          disabled={currentPage>=totalPages}
        >Next</button>
      </div>
    </div>
    </>
  );
}


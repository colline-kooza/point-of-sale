"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';

export default function PageNation({data}:any) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDishes = data.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  return (
    <div className="flex justify-between items-center w-full mt-5 dark:bg-[#020817]">
    <div className="text-xs text-muted-foreground whitespace-nowrap">
      Showing <strong>{indexOfFirstItem + 1}-{indexOfLastItem}</strong> of <strong>{data.length}</strong> 
    </div>
    <div className="flex gap-2">
      <Button  className='text-xs' variant="link" onClick={handlePrevPage} disabled={currentPage === 1}>Previous</Button>
      <Button className='text-xs' variant="link" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
    </div>
  </div>
  )
}

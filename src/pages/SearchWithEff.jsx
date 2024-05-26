// SearchWithEff.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import useFetch from '../hooks/useFetch';
import usePagination from '../hooks/usePagination';
import useDebounce from '../hooks/useDebounce';

const SearchWithEff = () => {
  const [query, setQuery] = useState("");
  const debouncedValue= useDebounce(query,500);
  const { 
    currentPage, 
    itemsPerPage, 
    nextPage, 
    prevPage, 
    setPage, 
    setItemsPerPage, 
    setTotalItemsCount, 
    startIndex 
  } = usePagination();
  const url= `https://dummyjson.com/products/search?q=${debouncedValue}`;
  const{ data,loading,error}=useFetch(url,'products');
  useEffect(() => {
    if (data) {
      setTotalItemsCount(100); // Set the total count based on actual response
    }
  }, [data, setTotalItemsCount]);
  const headers = ['Title','Image','Price'];

  // Formatting data for the Table component
  const tableData = data.map(item => ({
    Title: item.title,
    Price: item.price,
    Image: <img src={item.image} alt={item.title} style={{ width: '100px' }} />,
  }));

  return (
    <div>
      <input
        placeholder="Enter Your Query"
        onChange={(e) => setQuery(e.target.value)}
      />
       <Table headers={headers} data={tableData} />
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={nextPage} disabled={data.length < itemsPerPage}>Next</button>
      </div>
      <div>
        <label>
          Items per page:
          <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SearchWithEff;

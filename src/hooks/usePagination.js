import { useState, useCallback } from 'react';

const usePagination = (initialPage = 1, initialItemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [totalItems, setTotalItems] = useState(0);

  const nextPage = useCallback(() => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(totalItems / itemsPerPage)));
  }, [totalItems, itemsPerPage]);

  const prevPage = useCallback(() => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  }, []);

  const setPage = useCallback((page) => {
    setCurrentPage(() => Math.max(1, Math.min(page, Math.ceil(totalItems / itemsPerPage))));
  }, [totalItems, itemsPerPage]);

  const setTotalItemsCount = useCallback((count) => {
    setTotalItems(count);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return {
    currentPage,
    itemsPerPage,
    totalItems,
    nextPage,
    prevPage,
    setPage,
    setItemsPerPage,
    setTotalItemsCount,
    startIndex,
    endIndex,
  };
};

export default usePagination;

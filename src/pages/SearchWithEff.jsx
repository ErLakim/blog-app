// SearchWithEff.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';

const SearchWithEff = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const headers = ['Title','Image','Price'];

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const { data } = await axios(`https://dummyjson.com/products/search?q=${query}`);
        setData(data?.products || []);
      } catch (e) {
        console.log(e);
      }
    };
    fetchQuery();
  }, [query]);

  // Formatting data for the Table component
  const tableData = data.map(item => ({
    Title: item.title,
    Price: item.price,
    Image: <img src={item.image} alt={item.title} style={{ width: '100px' }} />,
  }));

  return (
    <div>
      <input placeholder="Enter Your Query" onChange={(e) => setQuery(e.target.value)} />
      <Table headers={headers} data={tableData} />
    </div>
  );
};

export default SearchWithEff;

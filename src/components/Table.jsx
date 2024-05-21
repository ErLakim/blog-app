// Table.jsx
import React from 'react';

const Table = ({ headers, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr key={index}>
              {headers.map((header, index) => (
                <td key={index}>{row[header]}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={headers.length}>No data Available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;

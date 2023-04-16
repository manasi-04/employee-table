import React, { useEffect, useState } from 'react';
import TableBody from '../components/table-body/table-body.component';
import TableHeader from '../components/table-header/table-header.component';
import orderBy from 'lodash/orderBy';

const Table = ({data, displayRows, selectedPage, setStartIndex, setFilteredDataLength}) => {
  const [sortColumn, setSortColumn] = useState('name');
  const [sortData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const sortedData = orderBy(data, [sortColumn], [sortOrder]);
    setSortedData(sortedData);
  }, [sortColumn, data, sortOrder]);

  useEffect(() => {
    const endValue = (selectedPage)*displayRows + displayRows > data.length ? data.length
      : (selectedPage)*displayRows + displayRows;
    setStartIndex((selectedPage)*displayRows);
    const tableRows = sortData.slice((+selectedPage)*displayRows, endValue);
    setFilteredData(tableRows);
    setFilteredDataLength(tableRows.length);
  }, [selectedPage, displayRows, sortData]);

  return (
    <table>
        <TableHeader headings={['Name', 'Position', 'Office', 'Age', 'Start Date', 'Salary']}
          setSortColumn={setSortColumn} sortColumn={sortColumn} setSortOrder={setSortOrder}
          sortOrder={sortOrder}/>
        <TableBody data={filteredData} />
    </table>
  );
};

export default Table;
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './table-header.css';

const TableHeader = ({headings, setSortColumn, sortColumn, setSortOrder, sortOrder}) => {
  const compareSortColHeading = (heading) => {
    if ((sortColumn === 'start_date' && heading === 'Start Date') || (sortColumn === heading.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };

  const onColumnClick = (heading) => {
    if (heading === 'Start Date') {
      setSortColumn('start_date');
    } else {
      setSortColumn(heading.toLowerCase());
    }
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <thead>
        <tr>
            {
                headings && headings.map((heading, i) => (
                    <th key={i} onClick={() => onColumnClick(heading)}>
                      <div className='table-heading'>
                        {heading}{compareSortColHeading(heading) && (
                          sortOrder === 'asc' ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                      </div>
                    </th>
                ))
            }
        </tr>
    </thead>
  );
};

export default TableHeader;
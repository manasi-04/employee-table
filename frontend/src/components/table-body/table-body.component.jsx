import React from 'react';
import TableRow from '../table-row/table-row.component';

const TableBody = ({data}) => {
  return (
    <tbody>
        {
            data.map((val, i) => (
                <TableRow rowData={val} key={i} entryNumber={i+1} />
            ))
        }
    </tbody>
  );
};

export default TableBody;
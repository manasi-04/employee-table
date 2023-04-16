import React from 'react';
import { USDollar } from './../../helpers/currency.helpers';
import './table-row.css';
import { getDateInMMDDYYYY } from '../../helpers/date.helpers';

const TableRow = ({rowData, entryNumber}) => {
  return (
    <tr className={entryNumber %2 === 0 ? '' : 'colored'}>
        {
            rowData &&
              <>
                <td>{rowData.name}</td>
                <td>{rowData.position}</td>
                <td>{rowData.office}</td>
                <td>{rowData.age}</td>
                <td>{getDateInMMDDYYYY(rowData.start_date)}</td>
                <td>{USDollar.format(rowData.salary)}</td> 
              </>
        }
    </tr>
  );
};

export default TableRow;
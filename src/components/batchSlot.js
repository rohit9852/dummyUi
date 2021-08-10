import React, { useMemo } from 'react';
import { useTable } from 'react-table';

// function SelectColumnFilter({
//     column: { filterValue, setFilter, preFilteredRows, id },
//   }) {
//     // Calculate the options for filtering
//     // using the preFilteredRows
//     const options = React.useMemo(() => {
//       const options = new Set()
//       preFilteredRows.forEach(row => {
//         options.add(row.values[id])
//       })
//       return [...options.values()]
//     }, [id, preFilteredRows])
  
//     // Render a multi-select box
//     return (
//       <select
//         value={filterValue}
//         onChange={e => {
//           setFilter(e.target.value || undefined)
//         }}
//       >
//         <option value="">All</option>
//         {options.map((option, i) => (
//           <option key={i} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     )
//   }
function SelectColumnFilter() {
    return <>
        <select name="" id="">
            <option value="">hi</option>
        </select>
    </>
}

export default function BatchSlot() {
    const columns = React.useMemo(
        () => [
          {
            Header: 'Style',
            accessor: 'style',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            Header: 'Age-Group',
            accessor: 'age_group',
            // Filter: SelectColumnFilter,
            // filter: 'includes',
          },{
            Header: 'Level',
            accessor: 'level',
            // Filter: SelectColumnFilter,
            // filter: 'includes',
          },{
            Header: 'Start Date',
            accessor: 'date',
          },{
            Header: 'Slot1',
            accessor: 'slot1',
          },{
            Header: 'Slot2',
            accessor: 'slot2',
          }
        ],
        []
      )
    
      const data = React.useMemo(
          () => [
              {
                  style: 'Dance',
                  age_group: '6-12',
                  level: 'l1',
                  date: '12-03-2001',
                  slot1:'monday 4pm-6pm',
                  slot2:'friday 3pm-5pm'
              },
              {
                style: 'Music',
                age_group: '5-6',
                level: 'l1',
                date: '12-03-2001',
                slot1:'monday 4pm-6pm',
                slot2:'friday 3pm-5pm'
            },
            {
                style: 'Dance',
                age_group: '3-5',
                level: 'l1',
                date: '12-03-2001',
                slot1:'monday 4pm-6pm',
                slot2:'friday 3pm-5pm'
            },
            {
                style: 'music',
                age_group: '6-12',
                level: 'l2',
                date: '12-03-2001',
                slot1:'monday 4pm-6pm',
                slot2:'friday 3pm-5pm'
            },
            {
                style: 'Dance',
                age_group: '6-12',
                level: 'l13',
                date: '12-03-2001',
                slot1:'monday 4pm-6pm',
                slot2:'friday 3pm-5pm'
            },
    
          ]
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    
      return (<div style={{
        marginLeft: '20px',
      }}>
          <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px black',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                        //   background: 'papayawhip',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
     
      </div>
         )
}

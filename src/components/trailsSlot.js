import React, { useState } from 'react'
import styled from 'styled-components'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
// A great library for fuzzy filtering/sorting items
import {matchSorter} from 'match-sorter';
import AddBatchSlot from './addBatchSlot';
import axios from "axios";




const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`


// Define a default UI for filtering
// TODO
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
      <></>
  )
}

// This is a custom filter UI for selecting
// a unique option from a list
// TODO: 
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

// Our table component
function Table({ columns, data}) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // state,
    visibleColumns,
    // preGlobalFilteredRows,
    // setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
    useGlobalFilter // useGlobalFilter!
  )

  function addBatchSlot() {
    setIsOpenModel(true);
}

  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  const firstPageRows = rows.slice(0, 10)
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [personName, setPersonName] = useState([]);
  function handleClose() {
    setIsOpenModel(false);
}
const handleChange = (event) => {
  setPersonName(event.target.value);
};

const handleAddInstructor = () => {
    //TODO: api call
    setIsOpenModel(false);
}


  return (
    <>
    <div>
        <select>
            <option>Category</option>
            <option>dance</option>
            <option>music</option>
            <option>acting</option>
        </select>
        <select>
            <option>Instructor</option>
            <option>Hello</option>
            <option>Ram</option>
            <option>Ram</option>
        </select>

        <button onClick={addBatchSlot}>Add</button>
    </div>
    <br/>
    {
                    isOpenModel?
                    <>
                       <AddBatchSlot 
                            isOpenModel={isOpenModel}
                            handleClose={handleClose}
                            personName={personName} 
                            handleChange={handleChange}
                            handleAddInstructor={handleAddInstructor}
                        />
                    </> : null
                }

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: 'left',
              }}
            >
              {/* <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              /> */}
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <br />
    </>
  )
}

// Define a custom filter filter function!
// function filterGreaterThan(rows, id, filterValue) {
//   return rows.filter(row => {
//     const rowValue = row.values[id]
//     return rowValue >= filterValue
//   })
// }

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
// filterGreaterThan.autoRemove = val => typeof val !== 'number'

function App() {
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
            Filter: SelectColumnFilter,
            // filter: 'includes',
          },{
            Header: 'Level',
            accessor: 'level',
            Filter: SelectColumnFilter,
            // filter: 'includes',
          },{
            Header: 'Start Date',
            accessor: 'start_date',
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


//   const data = React.useMemo(() => makeData(100000), [])
const [data, setData] = useState([]);
console.log(data)
axios
.get('http://192.168.1.134:8888/batch/')
.then((res) => {
    setData(res.data);
  console.log('console', res);
});

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default App

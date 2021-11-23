//TODO:Create list scroll

import React from "react";
import { useTable } from "react-table";

const PrequalificationTable = () => {
  const data = React.useMemo(
    () => [
      {
        buyer: "Strathmore",
        job: "Supply Chips",
        category_code: 12234324,
        category: "Technology",
        closing_date: "12-12-24",
        bid_fee: "ksh. 200000",
        actions: "passed",
      },
      {
        buyer: "Strathmore",
        job: "Supply Chips",
        category_code: 12234324,
        category: "Technology",
        closing_date: "12-10-21",
        bid_fee: "ksh. 200000",
        actions: "passed",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Buyer",
        accessor: "buyer", // accessor is the "key" in the data
      },
      {
        Header: "Job",
        accessor: "job",
      },
      {
        Header: "Category Code",
        accessor: "category_code",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Closing Date",
        accessor: "closing_date",
      },
      {
        Header: "Bid Fee",
        accessor: "bid_fee",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // apply the table props
    <table className="" {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th
                    className="font-medium text-subheading pr-20 "
                    {...column.getHeaderProps()}
                  >
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody className="font-thin text-primary" {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default PrequalificationTable;

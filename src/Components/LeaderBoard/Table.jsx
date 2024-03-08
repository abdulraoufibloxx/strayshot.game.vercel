import { useTable, usePagination } from "react-table";
import { useMemo } from "react";
import "./LeaderBoard.css";
function Table() {
  const brData = [
    { rank: 1, player: "billyashe", points: 323 },
    { rank: 2, player: "tatam", points: 323 },
    { rank: 3, player: "markelo", points: 315 },
    { rank: 4, player: "gentelman", points: 279 },
    { rank: 5, player: "niot", points: 272 },
    { rank: 6, player: "uranium", points: 262 },
    { rank: 7, player: "fvded", points: 256 },
    { rank: 8, player: "bloppo", points: 233 },
    { rank: 9, player: "oqame", points: 231 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
    { rank: 10, player: "abyss", points: 230 },
  ];

  const brColumns = [
    {
      Header: "RANK",
      accessor: "rank",
    },
    {
      Header: "PLAYER",
      accessor: "player",
    },
    {
      Header: "POINTS",
      accessor: "points",
    },
  ];

  const columns = useMemo(() => brColumns, []);
  const data = useMemo(() => brData, []);

  const tableInstance = useTable({ columns, data }, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
  } = tableInstance;

  const { pageIndex } = state;

  return (
    <div>
      {/* react table starts here */}
      <table
        className="leaderboard-table leader-board-score"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")} </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-center mt-5">
        <span>
          Page{" "}
          <strong>
            {" "}
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
      </div>

      {/* react table ends here */}
    </div>
  );
}

export default Table;

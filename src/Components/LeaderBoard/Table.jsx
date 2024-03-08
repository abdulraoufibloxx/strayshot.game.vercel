import { useTable, usePagination } from "react-table";
import { useEffect, useMemo, useState } from "react";
import leaderBoardVectorRight from "../../assets/LeaderBoard/right-vector.svg";
import leaderBoardVectorLeft from "../../assets/LeaderBoard/left-vector.svg";
import leaderBoardVectorBottom from "../../assets/LeaderBoard/bottom-vector.svg";
import leaderBoardTabTop from "../../assets/LeaderBoard/leaderboard-tab-btn-top.svg";

import "./LeaderBoard.css";
import axios from "axios";

function Table({ apiUrl }) {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setLeaderboardData(response.data.leaderboard);
        console.log("Leaderboard Data---->", leaderboardData);
      } catch (err) {
        console.log("Error fetching leaderboard data", err);
      }
    };
    fetchData();
  }, []);

  const brColumns = [
    {
      Header: "RANK",
      accessor: "rank",
    },
    {
      Header: "PLAYER",
      accessor: "playerId",
    },
    {
      Header: "POINTS",
      accessor: "last10MatchPoints",
    },
  ];

  const columns = useMemo(() => brColumns, []);

  //   const data = useMemo(() => brData, []);

  const data = useMemo(
    () =>
      leaderboardData.map((entry, index) => ({
        ...entry,
        rank: index + 1,
        last10MatchPoints: parseInt(entry.last10MatchPoints),
      })),
    [leaderboardData]
  );

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
    SetPageSize,
    state,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

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
        <img className="leaderboard-vector-top" src={leaderBoardVectorBottom} />
        <img
          className="leaderboard-vector-right"
          src={leaderBoardVectorRight}
        />
        <img className="leaderboard-vector-left" src={leaderBoardVectorLeft} />
        <img
          className="leaderboard-vector-bottom"
          src={leaderBoardVectorBottom}
        />
      </table>

      <div className="d-flex justify-content-center pagination-container text-center container mt-5 ">
        <div className="row">
          <div className="col-md-8 mb-3">
            {" "}
            {/* Use col-md-6 to make it take up half the width on medium and larger screens */}
            <div className="leaderboard-span-element">
              Page{" "}
              <strong>
                {" "}
                {pageIndex + 1} of {pageOptions.length}{" "}
              </strong>
              | Go to page:{" "}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
                min={1}
                max={pageOptions.length}
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            {/* Use col-md-6 to make it take up half the width on medium and larger screens */}
            <div className="leaderboard-pagination-btn-container d-flex justify-content-center">
              <button
                className="leaderboard-pagination-btn"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {"<<"}
              </button>
              <button
                className="leaderboard-pagination-btn"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous
              </button>
              <button
                className="leaderboard-pagination-btn"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </button>
              <button
                className="leaderboard-pagination-btn"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* react table ends here */}
    </div>
  );
}

export default Table;

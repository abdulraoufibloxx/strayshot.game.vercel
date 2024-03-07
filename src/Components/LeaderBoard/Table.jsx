import { useTable } from 'react-table';
import {useMemo} from 'react';
function Table (){

    const brData = [
        { rank: 1, player: 'billyashe', points: 323 },
        { rank: 2, player: 'tatam', points: 323 },
        { rank: 3, player: 'markelo', points: 315 },
        { rank: 4, player: 'gentelman', points: 279 },
        { rank: 5, player: 'niot', points: 272 },
        { rank: 6, player: 'uranium', points: 262 },
        { rank: 7, player: 'fvded', points: 256 },
        { rank: 8, player: 'bloppo', points: 233 },
        { rank: 9, player: 'oqame', points: 231 },
        { rank: 10, player: 'abyss', points: 230 }
      ];

      const brColumns=[
        {
            Header:'RANK',
            accessor:'rank',
        },
        {
            Header:'PLAYER',
            accessor:'player',
        },
        {
            Header:'POINTS',
            accessor:'points',
        }
      ]

      const columns=useMemo(()=>brColumns,[])
      const data = useMemo(()=>brData,[])

      const tableInstance = useTable({columns,data})

      const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = tableInstance


    return (
        <div>
            <h2>Table</h2>
            {/* react table starts here */}

            <table {...getTableProps()}>
                                        <thead>
                                            {
                                                headerGroups.map(headerGroup => (
                                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                                        {
                                                            headerGroup.headers.map(column => (
                                                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                                            ))
                                                        }
                                                      
                                                    </tr>
                                                ))
                                            }
                                            
                                        </thead>
                                        <tbody {...getTableBodyProps()}>
                                            {
                                                rows.map(row => {
                                                    prepareRow(row)
                                                    return (
                                                        <tr {...row.getRowProps()}>
                                                            {
                                                                row.cells.map(cell => {
                                                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                                })
                                                            }
                                                            
                                                        </tr>
                                                    )
                                                })
                                            }
                                            
                                        </tbody>
                                    </table>

                                {/* react table ends here */}
        </div>
    )
}


export default Table
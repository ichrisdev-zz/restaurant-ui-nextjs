import { DataGrid } from '@mui/x-data-grid';

export const Table = ({ columns, data: rows }: any) => {
    console.log('rows' + rows)


    return (


        <div>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={(row) => row.idAction}
            />
        </div>

    )
}
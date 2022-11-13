import { GridRenderCellParams } from '@mui/x-data-grid';
import { Table } from '../../components/Table/Table';
import { DeleteButton } from '../../components/DeleteButton/DeleteButton';

export const Action = ({ data, info }: any) => {
    const columns = [
        {
            field: 'idAction',
            headerName: 'idAction',
            minWidth: 5,
            //filtered data to rendercell
            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        },
        {
            field: 'userName',
            headerName: 'userName',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        },
        {
            field: 'idUser',
            headerName: 'idUser',
            flex: 1,
            minWidth: 70,

            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        },
        {
            field: 'nameRole',
            headerName: 'nameRole',
            flex: 1,
            minWidth: 70,
            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        },
        {
            field: 'nameTableAction',
            headerName: 'nameTableAction',
            flex: 1,
            minWidth: 70,
            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        },
        {
            field: 'actionDetail',
            headerName: 'actionDetail',
            flex: 1,
            minWidth: 500,
            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        },
        {
            field: 'actionCreation',
            headerName: 'actionCreation',
            flex: 1,
            minWidth: 200,
            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        }
    ];

    return (
        <div className='container '>
            <DeleteButton />
            <Table columns={columns} data={data} />
        </div>



    )
}

export async function getServerSideProps({ req }: any) {

    //get cookie
    const token = req.cookies.tokenUser;
    // token decoder
    // let decoded: any = jwt_decode(token);
    // console.log('decoded' + decoded)
    const res = await fetch(`http://localhost:4000/admin/admin`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    const resData: any = await res.json();
    const data = resData.results.data
    const info = resData.results

    return {
        props: { data, info }, // will be passed to the page component as props
    }
}

export default Action
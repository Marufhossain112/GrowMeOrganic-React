import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { IPostData } from '../../Interfaces/IPostData';


export default function DataGridDemo() {
    const [postData, setPostData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => setPostData(data));
    }, []);

    const columns: GridColDef[] = [
        { field: 'userId', headerName: 'User ID', width: 90 },
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Title',
            width: 250,
            editable: true,
        },
        {
            field: 'body',
            headerName: 'Body',
            width: 850,
            editable: true,
        }
    ];

    const rows: IPostData[] = postData;
    return (
        <Box sx={{ height: "100%", width: '100%' }}>
            <DataGrid
                sx={{ mx: "4rem" }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
            />
        </Box>
    );
}
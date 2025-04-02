import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },

    {
        field: 'fullName',
        headerName: 'Author',
        sortable: false,
        width: 160,
        valueGetter: (_: any, row:any) => `${row.firstname || ''} ${row.lastname || ''}`,
    },

    { field: 'totalCopies', headerName: 'Total of Copies', width: 130, type: 'number' },
    { field: 'copiesInUse', headerName: 'Copies in use', width: 130, type: 'number' },
    { field: 'type', headerName: 'Type', width: 130 },
    { field: 'isbn', headerName: 'ISBN', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 }
  ];
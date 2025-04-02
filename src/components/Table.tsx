import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useScrollTrigger } from '@mui/material';
import { use, useMemo, useRef, useState } from 'react';

export interface TableProps {
  columns: GridColDef[];
  rows?: any[];
  rowsCount?: number;
  page: number; 
  take?: number;
  loading?: boolean;
  onPageChange?: (page: number, take: number) => void;
}

export function Table({ 
  columns, 
  rows, 
  rowsCount,
  page, 
  take, 
  loading,
  onPageChange
}: TableProps) {
  const [paginationModel, setPaginationModel] = useState({
    page: page || 0, 
    pageSize: take || rowsCount || 10
  });

  const rowCountRef = useRef(rowsCount || 0);

  const localRowsCount = useMemo(() => {
    if (rowsCount !== undefined) {
      rowCountRef.current = rowsCount;
    }

    return rowCountRef.current;

  }, [rowsCount]);

  const handlePageChange = (paginationModel: GridPaginationModel) => {
    setPaginationModel(paginationModel);

    if (onPageChange) {
      onPageChange(paginationModel.page, paginationModel.pageSize);
    }
  }

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        estimatedRowCount={10}
        rowCount={localRowsCount}
        onPaginationModelChange={handlePageChange}
        paginationModel={paginationModel}
        paginationMode="server"
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

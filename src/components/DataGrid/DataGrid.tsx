import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid as MDataGrid, GridColDef } from '@mui/x-data-grid';

export type DataGridProps = {
    onRowClick: (params:any) => void;
    getRowId: (row: any) => any;
    columnData: GridColDef[];
    tableData: Array<object>;
    pageSize?: number;
    rowsPerPageOptions?: Array<number>;
}

export const DataGrid = ({
  onRowClick,
  getRowId,
  columnData,
  tableData,
  pageSize = 10,
  rowsPerPageOptions = [10]
}: DataGridProps) => {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <MDataGrid
        sx={{
          "& .MuiDataGrid-row:hover": {
            cursor: 'pointer'
          }
        }}
        getRowId={getRowId}
        rows={tableData}
        columns={columnData}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        checkboxSelection
        experimentalFeatures={{ newEditingApi: true }}
        onCellClick={onRowClick}
      />
    </Box>
  );
}

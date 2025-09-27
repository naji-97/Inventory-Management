// components/CustomDataGrid.tsx
"use client";

import { DataGrid, DataGridProps } from "@mui/x-data-grid";

// You can extend DataGridProps so you can still pass rows, columns, etc.
export default function CustomDataGrid(props: DataGridProps) {
    return (
        <DataGrid
            // ✅ default styles for ALL tables
            checkboxSelection
            pageSizeOptions={[20]}
            initialState={{
                pagination: {
                    paginationModel: { pageSize: 20 },
                },
            }}
            className="
        bg-[red] text-gray-700 
        dark:bg-gray-900 dark:text-gray-100 
        shadow rounded-lg border border-gray-200 dark:border-gray-700
      "
            {...props} // ✅ allow overriding if needed
        />
    );
}

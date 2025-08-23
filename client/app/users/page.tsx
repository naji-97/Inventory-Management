"use client";

import { useGetUsersQuery } from "@/store/api";
import Header from "@/components/header/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FadeLoader } from "react-spinners";

const columns: GridColDef[] = [
    { field: "userId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
];

const Users = () => {
    const { data: users, isError, isLoading } = useGetUsersQuery();

    

    if (isError ) {
        return (
            <div className="text-center text-red-500 py-4">Failed to fetch users</div>
        );
    }

    return (
        <div className="flex flex-col">
            <Header name="Users" />
            {isLoading && (
                <div className="flex flex-col items-center justify-center h-[70vh]">
                    <FadeLoader color="#2392e6" height={30}
                        radius={4}
                        width={15}
                    />
                </div>
            )}
            <DataGrid
                rows={users}
                columns={columns}
                getRowId={(row) => row.userId}
                checkboxSelection
                className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
            />
        </div>
    );
};

export default Users;
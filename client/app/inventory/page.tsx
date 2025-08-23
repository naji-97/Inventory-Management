"use client";

import { useGetProductsQuery } from "@/store/api";
import Header from "@/components/header/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FadeLoader } from "react-spinners";

const columns: GridColDef[] = [
    { field: "productId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product Name", width: 200 },
    {
        field: "price",
        headerName: "Price",
        width: 110,
        type: "number",
        valueGetter: (value, row) => `$${row.price}`,
    },
    {
        field: "rating",
        headerName: "Rating",
        width: 110,
        type: "number",
        valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
    },
    {
        field: "stockQuantity",
        headerName: "Stock Quantity",
        width: 150,
        type: "number",
    },
];

const Inventory = () => {
    const { data: products, isLoading, isError  } = useGetProductsQuery();

    

    if (isError ) {
        return (
            <div className="text-center text-red-500 py-4">
                Failed to fetch products
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <Header name="Inventory" />
            {
                isLoading && (
                    <div className="flex flex-col items-center justify-center h-[70vh]">
                        <FadeLoader color="#2392e6" height={30}
                            radius={4}
                            width={15}
                            />
                    </div>
                )
            }
            {
                !isLoading && products?.length === 0 && (
                    <div className="text-center text-gray-400 py-4">
                        No products found
                    </div>
                )
            }
            <DataGrid
                rows={products}
                columns={columns}
                getRowId={(row) => row.productId}
                checkboxSelection
                initialState={
                    {
                        pagination: {
                            paginationModel: {
                                pageSize: 20,
                            },
                        },
                    }
                }
                pageSizeOptions={[ 20]}
                
                className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
            />
        </div>
    );
};

export default Inventory;
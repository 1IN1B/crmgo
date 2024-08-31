"use client";
import React from "react";
import DefaultLayout from "../defaultLayout/layout";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: any = [
    {
      id: 1, // Numeric ID
      name: "Product A",
      category: "Electronics",
      subCategory: "Mobile Phones",
      sequence: 1,
      image: "https://example.com/product-a.jpg", // Add image URL
    },
    {
      id: 2,
      name: "Product B",
      category: "Home Appliances",
      subCategory: "Refrigerators",
      sequence: 2,
      image: "https://example.com/product-b.jpg", // Add image URL
    },
    {
      id: 3,
      name: "Product C",
      category: "Electronics",
      subCategory: "Laptops",
      sequence: 3,
      image: "https://example.com/product-c.jpg", // Add image URL
    },
    {
      id: 4,
      name: "Product D",
      category: "Furniture",
      subCategory: "Chairs",
      sequence: 4,
      image: "https://example.com/product-d.jpg", // Add image URL
    },
    {
      id: 5,
      name: "Product E",
      category: "Electronics",
      subCategory: "Televisions",
      sequence: 5,
      image: "https://example.com/product-e.jpg", // Add image URL
    },
    {
        id: 1, // Numeric ID
        name: "Product A",
        category: "Electronics",
        subCategory: "Mobile Phones",
        sequence: 1,
        image: "https://example.com/product-a.jpg", // Add image URL
      },
      {
        id: 2,
        name: "Product B",
        category: "Home Appliances",
        subCategory: "Refrigerators",
        sequence: 2,
        image: "https://example.com/product-b.jpg", // Add image URL
      },
      {
        id: 3,
        name: "Product C",
        category: "Electronics",
        subCategory: "Laptops",
        sequence: 3,
        image: "https://example.com/product-c.jpg", // Add image URL
      },
      {
        id: 4,
        name: "Product D",
        category: "Furniture",
        subCategory: "Chairs",
        sequence: 4,
        image: "https://example.com/product-d.jpg", // Add image URL
      },
      {
        id: 5,
        name: "Product E",
        category: "Electronics",
        subCategory: "Televisions",
        sequence: 5,
        image: "https://example.com/product-e.jpg", // Add image URL
      },
  ];
  
  export type Product = {
    id: number; // Numeric ID
    name: string; // Product name
    category: string; // Product category
    subCategory: string; // Product sub-category
    sequence: number; // Sequence number
    image: string; // Product image URL
  };
  
  // Example handler functions for edit and delete actions
  const handleEdit = (product: any) => {
    // Logic to handle editing the product
    console.log("Editing product:", product);
    // Implement your edit logic here (e.g., open a modal with product details)
  };
  
  const handleDelete = (id: any) => {
    // Logic to handle deleting the product
    console.log("Deleting product with ID:", id);
    // Implement your delete logic here (e.g., show a confirmation dialog)
  };
  
  export const columns: ColumnDef<Product>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => <div>{row.getValue("id")}</div>,
    },
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => (
        <img
          src={row.getValue("image")}
          alt={`Product ${row.getValue("id")}`}
          className="w-20 h-20 object-contain"
        />
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <div className="capitalize">{row.getValue("category")}</div>,
    },
    {
      accessorKey: "subCategory",
      header: "Sub-Category",
      cell: ({ row }) => <div className="capitalize">{row.getValue("subCategory")}</div>,
    },
    {
      accessorKey: "sequence",
      header: "Sequence",
      cell: ({ row }) => <div>{row.getValue("sequence")}</div>,
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <Button onClick={() => handleEdit(row.original)}>Edit</Button>
          <Button onClick={() => handleDelete(row.original.id)}>Delete</Button>
        </div>
      ),
      enableSorting: false,
    },
  ];
export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by Name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" className="ml-auto">
          Add Product
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <DefaultLayout>
      <DataTableDemo />
    </DefaultLayout>
  );
}

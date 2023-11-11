"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

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

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ArrowUpDown, Plus, MoreHorizontal } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { queryClient } from "@/utils/query";
import { Record } from "pocketbase";
import { toast, useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export type Task = {
    task: string;
    description: string;
    status: string;
    priority: string;
};

const columns: ColumnDef<Task>[] = [
    {
        accessorKey: "task",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Task
                    <ArrowUpDown className="w-4 h-4 ml-2" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <Badge
                className="ml-4 bg-blue-500 cursor-pointer select-none hover:bg-blue-400"
                onClick={() => {
                    navigator.clipboard.writeText(row.getValue("task"));
                    toast({
                        description: "Copied to clipboard",
                    });
                }}
            >
                <div className="w-max">{row.getValue("task")}</div>
            </Badge>
        ),
    },
    {
        accessorKey: "description",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Description
                    <ArrowUpDown className="w-4 h-4 ml-2" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase truncate max-w-[200px] ml-4">
                {row.getValue("description")}
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Status
                    <ArrowUpDown className="w-4 h-4 ml-2" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase truncate max-w-[200px] ml-4">
                {row.getValue("status")}
            </div>
        ),
    },
    {
        accessorKey: "priority",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Priority
                    <ArrowUpDown className="w-4 h-4 ml-2" />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase truncate max-w-[200px] ml-4">
                {row.getValue("priority")}
            </div>
        ),
    },
];

export function DataTable() {
    const [sorting, setSorting] = React.useState<SortingState>([]);

    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);

    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});

    const [rowSelection, setRowSelection] = React.useState({});

    const data: Task[] = React.useMemo(() => {
        return [
            {
                task: "TASK-123-SIGN",
                description: "Contract signature",
                status: "In progress",
                priority: "High",
            },
        ] as Task[];
    }, []);

    const table = useReactTable({
        data,
        columns,
        enableRowSelection: true,
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
        <div className="w-full overflow-x-scroll">
            <div className="flex items-center py-2 space-x-2">
                <Input
                    placeholder="Rechercher"
                    onChange={(event) =>
                        table.setGlobalFilter(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>
            <div className="border rounded-md">
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
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
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
                            <TableRow className="">
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    Aucun résultat
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end py-4 space-x-2">
                {/* <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} sur{" "}
                    {table.getFilteredRowModel().rows.length} ligne(s)
                    selectionnée(s)
                </div> */}
                <div className="flex-1 text-sm text-muted-foreground">
                    Page {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Précédent
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

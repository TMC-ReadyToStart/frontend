import * as React from "react";
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import { Badge } from "./ui/badge";
import { MoocContent } from "@/models/api/moocReponseApi";
import { convertirFormatDate } from "@/lib/string_ope";

interface ActivityTableProps {
  data: MoocContent[];
  handleLaunchExercise: (id: number) => void;
}

const ActivityTable: React.FC<ActivityTableProps> = ({
  data,
  handleLaunchExercise,
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const columns: ColumnDef<MoocContent>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 w-4 h-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="flex justify-center items-center lowercase">
          {row.getValue("id")}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: () => {
        return <div className="text-center">Status</div>;
      },
      cell: ({ row }) => {
        const percent: number = row.getValue("percent");

        let status: string = "In Progress";
        let color: string = "bg-orange-400";

        if (percent == 100) {
          status = "Finished";
          color = "bg-green-400";
        }

        if (!percent) {
          status = "Not Started";
          color = "bg-gray-400";
        }

        return (
          <div className="flex justify-center items-center text-center">
            <Badge className={color}>{status}</Badge>
          </div>
        );
      },
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex justify-start"
          >
            Title
            <ArrowUpDown className="ml-2 w-4 h-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="">{row.getValue("title")}</div>,
    },
    {
      accessorKey: "percent",
      header: () => <div className="text-center">Percent</div>,
      cell: ({ row }) => {
        // Format the amount as a dollar amount
        const formatted = `${row.getValue("percent")}%`; // humanFileSize(size);

        return <div className="font-medium text-center">{formatted}</div>;
      },
    },
    {
      accessorKey: "description",
      header: () => <div className="text-left">Description</div>,
      cell: ({ row }) => {
        return (
          <div className="font-medium text-left">
            {row.getValue("description")}
          </div>
        );
      },
    },
    {
      accessorKey: "date",
      header: () => <div className="text-left">Date</div>,
      cell: ({ row }) => {
        return (
          <div className="font-medium text-left">
            {convertirFormatDate(row.getValue("date"))}
          </div>
        );
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const mooc = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 w-8 h-8">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(`${mooc.id}`)}
              >
                Copy exercice ID
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLaunchExercise(mooc.id)}>
                Launch Exercice
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

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
          placeholder="Filter reports..."
          value={
            (table.getColumn("id")?.getFilterValue() as string) ??
            (table.getColumn("title")?.getFilterValue() as string) ??
            (table.getColumn("description")?.getFilterValue() as string) ??
            ""
          }
          onChange={(event) => {
            table.getColumn("title")?.setFilterValue(event.target.value);
          }}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 w-4 h-4" />
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
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
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
      <div className="flex justify-end items-center py-4 space-x-2">
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
};

export default ActivityTable;

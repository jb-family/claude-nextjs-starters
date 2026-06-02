"use client";

import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
  status: "active" | "inactive";
  createdAt: string;
}

const SAMPLE_DATA: User[] = [
  { id: "1", name: "김민준", email: "minjun@example.com", role: "admin", status: "active", createdAt: "2024-01-15" },
  { id: "2", name: "이영희", email: "younghee@example.com", role: "user", status: "active", createdAt: "2024-02-20" },
  { id: "3", name: "박준호", email: "junho@example.com", role: "user", status: "inactive", createdAt: "2024-03-05" },
  { id: "4", name: "최수진", email: "sujin@example.com", role: "guest", status: "active", createdAt: "2024-04-10" },
  { id: "5", name: "정태양", email: "taeyang@example.com", role: "user", status: "active", createdAt: "2024-05-22" },
  { id: "6", name: "한지우", email: "jiwoo@example.com", role: "admin", status: "active", createdAt: "2024-06-01" },
  { id: "7", name: "오세훈", email: "sehun@example.com", role: "user", status: "inactive", createdAt: "2024-06-01" },
];

const roleVariant: Record<User["role"], "default" | "secondary" | "outline"> = {
  admin: "default",
  user: "secondary",
  guest: "outline",
};

export default function TablesExamplePage() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="전체 선택"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="행 선택"
          />
        ),
        enableSorting: false,
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="-ml-3"
          >
            이름
            {column.getIsSorted() === "asc" ? (
              <ArrowUp className="ml-1 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ArrowDown className="ml-1 h-4 w-4" />
            ) : (
              <ArrowUpDown className="ml-1 h-4 w-4" />
            )}
          </Button>
        ),
      },
      {
        accessorKey: "email",
        header: "이메일",
      },
      {
        accessorKey: "role",
        header: "역할",
        cell: ({ row }) => (
          <Badge variant={roleVariant[row.original.role]}>
            {row.original.role}
          </Badge>
        ),
      },
      {
        accessorKey: "status",
        header: "상태",
        cell: ({ row }) => (
          <Badge variant={row.original.status === "active" ? "default" : "secondary"}>
            {row.original.status === "active" ? "활성" : "비활성"}
          </Badge>
        ),
      },
      {
        accessorKey: "createdAt",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="-ml-3"
          >
            가입일
            {column.getIsSorted() === "asc" ? (
              <ArrowUp className="ml-1 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ArrowDown className="ml-1 h-4 w-4" />
            ) : (
              <ArrowUpDown className="ml-1 h-4 w-4" />
            )}
          </Button>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: SAMPLE_DATA,
    columns,
    state: { sorting, globalFilter, rowSelection },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableRowSelection: true,
  });

  const selectedCount = Object.keys(rowSelection).length;

  return (
    <PageContainer>
      <PageHeader
        title="테이블 예제"
        description="@tanstack/react-table을 사용한 정렬, 필터, 선택 기능 예제입니다."
        breadcrumbs={[
          { label: "홈", href: "/" },
          { label: "예제", href: "/examples" },
          { label: "테이블" },
        ]}
      />

      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-base">사용자 목록</CardTitle>
            <Input
              placeholder="검색..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="max-w-xs"
            />
          </div>
          {selectedCount > 0 && (
            <p className="text-sm text-muted-foreground">
              {selectedCount}개 행 선택됨
            </p>
          )}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() ? "selected" : undefined}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                    검색 결과가 없습니다.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </PageContainer>
  );
}

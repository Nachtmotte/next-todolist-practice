"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Todo } from "@/types/todo";

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "status",
    header: "",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getValue("status")}
        onCheckedChange={(value) => row.renderValue("hola")}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "text",
    header: "Text",
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-right">Created at</div>,
    cell: ({ row }) => (
      <div className="text-right">
        {row.getValue<Date>("createdAt").toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </div>
    ),
  },
  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Remove</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

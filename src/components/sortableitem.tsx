import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";

interface SortableItemProps {
  id: string;
  preference: {
    description: string;
  };
}

export function SortableItem({ id, preference }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <TableRow
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="border-none"
    >
      <TableCell className="hover:bg-blue-700 p-0 rounded-full border-0">
        <div className="flex items-center ">
          <span
            {...listeners}
            className="mr-2 cursor-move flex-grow flex-row flex gap-5 p-4 touch-none"
            style={{ touchAction: "none" }}
          >
            <GripVertical size={20} className="flex-shrink-0 self-center" />
            {preference.description}
          </span>
        </div>
      </TableCell>
    </TableRow>
  );
}

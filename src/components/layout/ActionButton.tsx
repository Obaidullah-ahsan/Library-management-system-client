import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteBookMutation } from "@/redux/features/books/bookApi";
import type { IBook } from "@/type";
import { Edit, Ellipsis, Trash } from "lucide-react";
import Swal from 'sweetalert2'

interface ActionButtonProps {
  book: IBook;
}

function ActionButton({ book }: ActionButtonProps) {
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async(result) => {
        if (result.isConfirmed) {
          await deleteBook(id).unwrap();
          console.log("Book deleted successfully");
          Swal.fire({
            title: "Deleted!",
            text: "Your book has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  console.log(book);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Ellipsis></Ellipsis>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Book Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <button>Edit Book</button>
            <DropdownMenuShortcut>
              <Edit></Edit>
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button onClick={() => handleDelete(book?._id)}>Delete Book</button>
            <DropdownMenuShortcut>
              <Trash></Trash>
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button>Borrow Book</button>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ActionButton;

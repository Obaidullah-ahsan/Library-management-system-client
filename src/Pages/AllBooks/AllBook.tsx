import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router";
// import Demo from "./demo";

const AllBook = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-2 my-4">
        <Link to="/">
          <ArrowBigLeft></ArrowBigLeft>
        </Link>
        <span className="text-xl font-medium uppercase">All Books</span>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>$250.00</TableCell>
              {/* <TableCell>
                <Demo></Demo>
              </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllBook;

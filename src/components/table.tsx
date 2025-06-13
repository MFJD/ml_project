import React from "react";
import DataTable from "react-data-table-component";

interface BookTableProps {
  data: Record<string, string>[];
}

const columns = [
  { name: "Title", selector: (row: any) => row.title, sortable: true },
  { name: "Author", selector: (row: any) => row.authors, sortable: true },
  { name: "Avg Rating", selector: (row: any) => row.average_rating },
  { name: "ISBN", selector: (row: any) => row.isbn },
  // Add more columns as needed...
];

const BookTable: React.FC<BookTableProps> = ({ data }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      responsive
      highlightOnHover
      striped
    />
  );
};

export default BookTable;

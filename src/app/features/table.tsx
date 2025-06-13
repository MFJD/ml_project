import React from "react";
import BookTable from "@/components/table";

interface BooksPageProps {
  data: Record<string, string>[]; // or strongly typed row structure
}

const BooksPage = ({ data }: BooksPageProps) => {
  return (
    <div className="max-w-5xl border border-gray-200 mx-auto mt-10 bg-white p-4 rounded shadow">
      <BookTable data={data} />
    </div>
  );
};

export default BooksPage;

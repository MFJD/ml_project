'use client'
import React, { useState } from "react";
import Input from "@/components/input";
import BooksPage from "./table";

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    average_rating: "",
    isbn: "",
    isbn13: "",
    language_code: "",
    num_pages: "",
    rating_counts: "",
    text_reviews: "",
    publication_date: "",
    publisher: "",
  });

  const [submittedBooks, setSubmittedBooks] = useState<Record<string, string>[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = `${key.replace("_", " ")} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedBooks((prev) => [...prev, formData]);
      setShowForm(false);
      console.log("Submitted Data:", JSON.stringify(formData, null, 2));
    }
  };

  return (
    <>
      {showForm ? (
        <div className="max-w-3xl mx-auto p-6 bg-transparent rounded-xl mt-2">
          <h2 className="text-xl font-semibold mb-6 text-left text-gray-800">Add Book Details</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(formData).map(([key, value]) => (
              <Input
                key={key}
                label={key.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                name={key}
                type={
                  key === "publication_date"
                    ? "date"
                    : key.includes("rating") || key.includes("count") || key.includes("pages")
                    ? "number"
                    : "text"
                }
                placeholder={`Enter ${key.replace("_", " ")}`}
                value={value}
                onchange={handleChange}
                errors={errors[key] ? { message: errors[key] } : undefined}
              />
            ))}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
              >
                Submit Book Info
              </button>
            </div>
          </form>
        </div>
      ) : (
        <BooksPage data={submittedBooks} />
      )}
    </>
  );
};

export default BookForm;

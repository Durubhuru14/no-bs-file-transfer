"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

type FileEntry = {
  name: string;
  extension: string;
  size: string;
  lastModified: string;
  url: string;
};

const fetchFiles = async (): Promise<FileEntry[]> => {
  const response = await fetch("api/files");
  if (!response.ok) {
    throw new Error("Failed to fetch files");
  }
  const files = await response.json();
  return files;
};

export default function FilesTable() {
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFiles()
      .then((fileData) => {
        setFiles(fileData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching files");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-stone-500">Loading files...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
      <thead className="text-xs text-stone-700 uppercase bg-stone-50 dark:bg-stone-700 dark:text-stone-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            File name
          </th>
          <th scope="col" className="px-6 py-3">
            Extension
          </th>
          <th scope="col" className="px-6 py-3">
            Size
          </th>
          <th scope="col" className="px-6 py-3">
            Last Modified
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Download</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {files.map(({ name, size, lastModified, extension, url }) => (
          <tr
            key={`${name}${lastModified}`}
            className="bg-white border-b dark:bg-stone-800 dark:border-stone-700 border-stone-200 hover:bg-stone-50 dark:hover:bg-stone-600"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
            >
              {name}
            </th>
            <td className="px-6 py-4">{extension}</td>
            <td className="px-6 py-4">{size}</td>
            <td className="px-6 py-4">{lastModified}</td>
            <td className="px-6 py-4 text-right">
              <Link
                href={url}
                className="font-medium text-pink-600 dark:text-pink-500 hover:underline"
              >
                Download
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

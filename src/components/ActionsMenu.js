"use client";
import { useState, useRef, useEffect } from "react";
import { MoreVertical, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";

export default function ActionsMenu({ viewLink, editLink, onDelete }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-1 rounded hover:bg-gray-200"
      >
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>

      {open && (
        <div className="absolute right-[25px] mt-2 w-32 bg-white border rounded border-[#EAECF0] z-20 shadow-lg">
          <Link
            href={viewLink}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <Eye className="w-4 h-4 mr-2" />
            View
          </Link>

          <Link
            href={editLink}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Link>

          <button
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            onClick={() => {
              onDelete?.();
              setOpen(false);
            }}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

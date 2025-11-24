"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { X, UploadCloud } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

export default function FileUploader() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const removeFile = (name) => {
    setFiles((prev) => prev.filter((file) => file.name !== name));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div className="w-full mx-auto">
      {/* Dropzone Area */}
      <div
        {...getRootProps()}
        className={clsx(
          "flex flex-col items-center justify-center w-full p-10 border-2 border-dashed rounded-xl transition cursor-pointer",
          isDragActive
            ? "border-[#144a6c] bg-[#f5f9fc]"
            : "border-gray-300 hover:border-[#144a6c]"
        )}
      >
        <input {...getInputProps()} />
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.5 12L12.5 8M12.5 8L8.5 12M12.5 8V17.2C12.5 18.5907 12.5 19.2861 13.0505 20.0646C13.4163 20.5819 14.4694 21.2203 15.0972 21.3054C16.0421 21.4334 16.4009 21.2462 17.1186 20.8719C20.3167 19.2036 22.5 15.8568 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 15.7014 4.51099 18.9331 7.5 20.6622" stroke="#355E5B" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" /> </svg>
        {isDragActive ? (
          <p className="text-[#144a6c] font-medium text-sm">Drop files here...</p>
        ) : (
          <>
            <p className="text-[#355E5BCC] text-sm font-normal mt-2 ">
              Drag & drop or click to upload files here.
            </p>
            {/* <p className="text-xs text-gray-400 mt-1">
              Supports PDF, JPG, JPEG, PNG
            </p> */}
          </>
        )}
      </div>

      {/* File Preview List */}
      {files.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((file) => (
            <div
              key={file.name}
              className="relative flex flex-col border rounded-lg p-3 shadow-sm bg-white"
            >
              {file.type.startsWith("image/") ? (
                // <img
                //   src={file.preview}
                //   alt={file.name}
                //   className="w-full h-40 object-cover rounded-md mb-2"
                // />
                <Image
                  src={file.preview}
                  alt={file.name}
                  width={100}
                  height={40}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
              ) : (
                <div className="flex items-center justify-center h-40 bg-gray-100 text-[#144a6c] font-semibold text-sm rounded-md">
                  PDF FILE
                </div>
              )}

              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-gray-400">
                {(file.size / 1024).toFixed(1)} KB
              </p>

              {/* Remove button */}
              <button
                onClick={() => removeFile(file.name)}
                className="absolute top-2 right-2 bg-white rounded-full shadow p-1 hover:bg-red-500 hover:text-white transition"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

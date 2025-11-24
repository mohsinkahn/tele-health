import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

const ImageUploadWithPreview = () => {
  const [images, setImages] = useState([]);
  const inputRef = useRef();

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    const newImages = fileArray.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages(prev => [...prev, ...newImages]);
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleRemove = (index) => {
    setImages(prev => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid md:grid-cols-1 grid-cols-1 gap-4 mt-4">
      <label className="text-[#202E2D] mb-1">Upload File</label>
      <div
        onClick={() => inputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border border-dashed border-[#355E5B8A] rounded-[8px] p-6 flex flex-col justify-center items-center cursor-pointer min-h-[150px] relative"
      >
        {images.length === 0 && (
          <div className="flex flex-col justify-center items-center gap-2 text-[#355E5B] opacity-80">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10.5L11 6.5M11 6.5L7 10.5M11 6.5V15.7C11 17.0907 11 17.7861 11.5505 18.5646C11.9163 19.0819 12.9694 19.7203 13.5972 19.8054C14.5421 19.9334 14.9009 19.7462 15.6186 19.3719C18.8167 17.7036 21 14.3568 21 10.5C21 4.97715 16.5228 0.5 11 0.5C5.47715 0.5 1 4.97715 1 10.5C1 14.2014 3.01099 17.4331 6 19.1622"
                stroke="#355E5B"
                strokeOpacity="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm select-none">Drag & drop files here or click to upload</span>
          </div>
        )}

        {/* Preview Images */}
        <div className="flex flex-wrap gap-4 mt-2 justify-center">
          {images.map((img, index) => (
            <div key={index} className="relative w-24 h-24 border rounded overflow-hidden shadow-sm">
              {/* <img
                src={img.preview}
                alt={`preview-${index}`}
                className="object-cover w-full h-full"
              /> */}
              <Image
                src={img.preview}
                alt={`preview-${index}`}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(index);
                }}
                className="absolute top-1 right-1 bg-white rounded-full text-red-600 hover:text-red-800 p-1 shadow-md"
                title="Remove image"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          ref={inputRef}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUploadWithPreview;

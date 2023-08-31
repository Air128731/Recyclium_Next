import React, { useState, ChangeEvent, useRef } from "react";

interface SelectedImage {
  file: File;
  url: string;
}

type props = {
  className?: string;
};

const ImageUploader = (props: props) => {
  const { className } = props;

  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null,
  );

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage({
          file: file,
          url: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {selectedImage ? (
        <div className="relative w-full">
          <img
            src={selectedImage.url}
            alt="Uploaded"
            className={`w-full rounded-2xl py-2 ${className}`}
          />
          <div className="absolute bottom-2 flex w-full justify-between px-2 font-primary text-xs font-normal text-darkgray">
            <button
              onClick={handleButtonClick}
              className="rounded-lg bg-black bg-opacity-20 px-2 py-1 text-white"
            >
              Reupload
            </button>
            <div className="rounded-lg bg-black bg-opacity-20 px-2 py-1 text-white">
              {selectedImage.file.name}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`border-1 flex w-full items-center rounded-xl border border-solid border-teal-500 font-primary text-xs font-normal text-darkgray ${className}`}
        >
          <button
            onClick={handleButtonClick}
            className="mx-auto rounded-lg bg-black bg-opacity-20 px-2 py-1 text-white"
          >
            Upload
          </button>
        </div>
      )}
      <div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUploader;

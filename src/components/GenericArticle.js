import React from 'react';

const GenericArticle = ({ imageSrc, title, text, linkReference, linkText }) => {
  return (
    <div className="grid grid-cols-4 border-b border-gray-300 mb-5">
      <div className="col-span-1">
        <a href={linkReference}>
          <img src={imageSrc} alt="Generic" className="w-full h-auto" />
        </a>
      </div>
      <div className="col-span-3 flex flex-col ml-4">
        <div className="font-serif text-lg">
          <a href={linkReference}>{title}</a>
        </div>
        <div className="font-sans text-sm">{text}</div>
        <div className="flex justify-end mt-2">
          <a href={linkReference} className="text-gray-300 ml-auto mt-1 font-sans text-sm">{linkText}</a>
        </div>
      </div>
    </div>
  );
};

export default GenericArticle;

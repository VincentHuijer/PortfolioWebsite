import React from 'react';

const GenericArticle = ({ imageSrc, title, text, linkReference, linkText }) => {
  return (
    <div className="border-b border-gray-300 mb-5 p-4 md:grid md:grid-cols-4 md:gap-4">
      <div className="md:col-span-1">
        <a href={linkReference}>
          <img src={imageSrc} alt="Generic" className="w-full h-auto" />
        </a>
      </div>
      <div className="md:col-span-3 flex flex-col mt-4 md:mt-0">
        <div className="font-serif text-xl mb-2">
          <a href={linkReference}>{title}</a>
        </div>
        <div className="font-sans flex-grow">{text}</div>
        <div className="flex justify-end mt-2 ml-5">
          <a href={linkReference} className="text-gray-300 ml-auto font-sans text-sm">{linkText}</a>
        </div>
      </div>
    </div>
  );
};

export default GenericArticle;

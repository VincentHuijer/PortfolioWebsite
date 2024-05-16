import React from 'react';
import { Link } from 'react-router-dom';
import DeleteComment from './DeleteComment';

const GenericComment = ({ id, imageSrc, title, text, linkReference, linkText }) => {
  return (
    <div className="border-b border-gray-300 mb-5 p-4 flex row">
      <div className="md:col-span-1 mr-2">
          <img src={imageSrc} alt="Generic" className="w-32 h-32" />
      </div>
      <div className="md:col-span-3 flex flex-col mt-4 md:mt-0">
        <div className="font-serif text-xl mb-2">
          <div>{title}</div>
        </div>
        <div className="font-sans flex-grow">{text}</div>
        <DeleteComment id={id}/>
        <div className="flex justify-end mt-2 ml-5">
        <div className="text-gray-300 ml-auto font-sans text-sm">{linkText}</div>
        </div>
      </div>
    </div>
  );
};

export default GenericComment;

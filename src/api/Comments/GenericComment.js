import React from 'react';
import { Link } from 'react-router-dom';
import DeleteComment from './DeleteComment';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GenericComment = ({ id, imageSrc, title, text, linkReference, linkText }) => {
  return (
    <div className='w-4/6 mx-auto' style={{}}>
        <FontAwesomeIcon icon={faEllipsisVertical} style={{float: 'inline-end'}}/>
      <div className="border-b border-gray-300 mb-3 p-4 flex row">
        <div className="md:col-span-1 mr-2">
            <img src={imageSrc} alt="Generic" className='rounded-full' style={{ width: 100, height: 100, maxWidth: 'none'}}/>
        </div>
        <div className="md:col-span-3 flex flex-col mt-4 md:mt-0">
          <div className="font-serif text-xl">
            <div>{title}</div>
          </div>
          <div className="font-sans flex-grow">{text}</div>
          <DeleteComment id={id}/>
          <div className="flex justify-end mt-2 ml-5">
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericComment;

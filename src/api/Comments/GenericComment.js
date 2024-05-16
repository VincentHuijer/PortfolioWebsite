import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteComment from './DeleteComment';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdateComment from './UpdateComment';


const GenericComment = ({ id, imageSrc, title, message, postObject }) => {
  const [oldText] = useState(message)
  const [newText, setNewText] = useState(message)
  const [updating, setUpdating] = useState(false)

  const handleTextChange = (event) => {
    setNewText(event.target.value);
  };


  return (
    <div className='' style={{}}>
        <FontAwesomeIcon icon={faEllipsisVertical} style={{float: 'inline-end'}}/>
      <div className="border-b border-gray-300 mb-3 p-4 flex row">
        <div className="md:col-span-1 mr-2">
            <img src={imageSrc} alt="Generic" className='rounded-full' style={{ width: 100, height: 100, maxWidth: 'none'}}/>
        </div>
        <div className="md:col-span-3 flex flex-col mt-4 md:mt-0">
          <div className="font-serif text-xl">
            <div>{title}</div>
          </div>
          {updating ? (
            <textarea className="font-sans flex-grow" value={newText} onChange={handleTextChange}/>
          ) : (
            <div className="font-sans flex-grow">{message}</div>
          )}
          <div className='flex row'>
            <DeleteComment id={id}/>
              {updating ? (
                <div className='flex row'>
                  <UpdateComment id={id} message={newText} postObject={postObject}/>
                  <div role='button' className='ml-2' onClick={() => { setNewText(oldText); setUpdating(false); }}>annuleren</div>

                </div>
              ) : (
              <div role='button' onClick={setUpdating}> bewerken</div>
              )} 
          </div>
          <div className="flex justify-end mt-2 ml-5">
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericComment;

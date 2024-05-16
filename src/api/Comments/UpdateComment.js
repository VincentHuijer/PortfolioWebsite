import { useState, useEffect } from "react";

const BASE_URL = 'https://localhost:7116/api/Comment';

export default function UpdateComment({id, message, postObject}) {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleUpdate = () => {
        fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id, message, email: postObject.email, firstName: postObject.firstName,  lastName: postObject.lastName, imageUrl: postObject.imageUrl, title: postObject.title }) 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update comment');
            }
            return response.json();
        })
        .then(() => {
            setSuccess('Comment updated successfully!');
            setError(null);
        })
        .catch(error => {
            console.error('Error updating comment:', error);
            setError('Error updating comment: ' + error.message);
            setSuccess(null);
        });
    };



    return (
        <div>
          <button onClick={() => handleUpdate(id)}>opslaan</button>
        </div>
    );
}

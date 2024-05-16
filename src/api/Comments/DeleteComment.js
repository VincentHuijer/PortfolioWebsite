import { useState, useEffect } from "react";

const BASE_URL = 'https://localhost:7116/api/Comment';

export default function DeleteComment({id}) {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleDelete = (id) => {
        fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete comment');
            }
            return response.json();
        })
        .then(() => {
            setSuccess('Comment deleted successfully!');
            setError(null);
        })
        .catch(error => {
            console.error('Error deleting comment:', error);
            setError('Error deleting comment: ' + error.message);
            setSuccess(null);
        });
    };



    return (
        <div className="mr-2">
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
}

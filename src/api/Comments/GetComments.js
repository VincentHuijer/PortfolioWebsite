import { useState, useEffect } from "react";

const BASE_URL = 'https://localhost:7116/api/Comments';

export default function GetComments() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setPosts(data); 
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message); 
        }
    };

    return { posts, error };
}

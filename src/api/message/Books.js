import { useState, useEffect } from "react";

const BASE_URL = 'https://localhost:7116/api/Books';

export default function GetBooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => {
                if (!response.ok) {
                    console.log('response:', response)
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                setPosts(data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message); 
            });
    }, []); // Empty dependency array ensures the effect runs only once when component mounts

    if (error) {
        return <div>Books can't be fetched {error}</div>; 
    }

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}> {post.name}, {post.author}</li>
                ))}
            </ul>
        </div>
    );
}

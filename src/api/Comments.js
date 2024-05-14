import { useState, useEffect } from "react";
import GenericArticle from "../components/GenericArticle";
import VueLogo from '../media/Logos/VueLogo.png' 

const BASE_URL = 'https://localhost:7116/api/Comments';

export default function GetComments() {
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
        return <div>Comments can't be fetched {error}</div>; 
    }

    return (
        <div>
            <ul>
                {posts.map((post) => (
                  <GenericArticle
                    key={post.id}
                    imageSrc={post.imageUrl}
                    title={`${post.title}, - ${post.firstName} ${post.lastName}`}
                    text={post.message}
                  />
                ))}
            </ul>
        </div>
    );
}

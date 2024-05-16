import React, { useState, useEffect } from "react";
import GenericComment from "./GenericComment";
import GetComments from "./GetComments";

const DisplayComments = () => {
    const { posts, error } = GetComments();

    useEffect(() => {
        if (error) {
            console.error('Error fetching data:', error);
        }
    }, [error]);

    if (error) {
        return <div>Comments can't be fetched {error}</div>; 
    }

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <GenericComment
                        key={post.id}
                        id={post.id}
                        imageSrc={post.imageUrl}
                        title={`${post.title}, - ${post.firstName} ${post.lastName}`}
                        text={post.message}
                    />
                ))}
            </ul>
        </div>
    );
};

export default DisplayComments;

import { useEffect, useState } from "react";
import Comment from "./Comment";
import './assets/Comments.css';

function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const loadComments = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await response.json()
            setComments(data)
        }
        loadComments();
    }, [])
    return (
        <>
        <div className="navBar">
            <h2>Total Comments: {comments.length}</h2>
        </div>
        <div className="cardContainer">
            {
                comments.map((comment, index) =>(
                    <Comment comment={comment} key={index}></Comment>
                ) )
            }
        </div>
        </>
    )
}
export default Comments
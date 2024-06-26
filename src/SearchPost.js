import { useState } from "react";

const SearchPost = () => {
    const [posts, setPosts] = useState([]);
    const [post, getPosts] = useState([]);

    async function fetchPost() {
        await fetch(`http://localhost:8000/posts/?:id =${posts}` , {
            method: 'GET',
        })
        .then(() => {
            response = response.json()
            data => getPosts(data)
            console.log(post);
        })
    }

    return (
        <form onInput={fetchPost}>
            <div>
                {post}
            </div>
            <label htmlFor="post">Enter post</label>
            <input type="text" name="post" onChange={(e) => setPosts(e.target.value)} />
        </form>
    );
}

export default SearchPost;
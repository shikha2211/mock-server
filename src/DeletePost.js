import {useState, useRef} from 'react';

function DeletePost () {    
    const [posts, setNewPosts] = useState([]);
    const textInputRef= useRef();

    const DeleteUser = async() => {
        const userid = textInputRef.current.value;
        await fetch(`http://localhost:8000/posts/${userid}`,{
            method: 'DELETE',
        }).then(() => {
            console.log("Post deleted successfully!");
            fetch('http://localhost:8000/posts')
            .then((response) => response.json())
            .then(data => setNewPosts(data))
            console.log(posts);
        })
    }

    return(
        <div>
            <input type="text" name="userid" ref={textInputRef} placeholder="Enter the id" />
            <button onClick={DeleteUser}>Delete</button>
        </div>
    );
}

export default DeletePost;
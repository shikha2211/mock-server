import { useState } from "react";

function AddPost() {

    const [posts, setNewPosts] = useState([]);

    const AddNewPost = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const id = Math.random() * 12;
        //const request = await fetch("http://localhost:8000/posts")
        fetch("http://localhost:8000/posts" , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({id, name, email, address})
        }).then(() => {
            console.log("Post created successfully!");

            fetch('http://localhost:8000/posts')
            .then((response) => response.json())
            .then(data => setNewPosts(data))
            console.log(posts);
        })
     
    }

    return (
        <form onSubmit = {AddNewPost}>
            <label htmlFor="name">Enter Name:</label>
            <input id="name" type="text" />
            <label htmlFor="email">Enter Email:</label>
            <input id="email" type="text" />
            <label htmlFor="address">Enter Address:</label>
            <input id = "address" type="text" />
            <button type="submit">Add Post</button> 
        </form>
    );
}

export default AddPost;
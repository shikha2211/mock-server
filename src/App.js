import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [post, setPost] = useState([]);

  useEffect (() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/posts')
          const res = await response.json()
          setPost(res);
          console.log(post);
        }
        catch(err) {
          console.log("Error while fetching response!");
        } 
      }
      fetchData();
  }, []);


  return (
    <div className="App">
      <ol>
        {
          post.map((p) => {
            return <li key={p.userid}>{p.name}</li>
          })
        }
      </ol>
    </div>
  );
}

export default App;

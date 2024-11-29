import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://a3eced3e15a3b61b.mokky.dev/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner"></div>
        <p>Жүктелуде...</p>
      </div>
    );
  }

  if (error) {
    return <p>Қателік орын алды: {error.message}</p>;
  }

  return (
    <div className="container">
      <h1 className="title">Жаңа посттар</h1>
      {posts.length > 0 ? (
        <div className="news">
          {posts.map((post) => (
            <article key={post.id} className="news-card">
              <h3 className="news-card__title">{post.title}</h3>
              <strong className="news-card__date">{post.date}</strong>
              <p>{post.excerpt}</p>
              <a href={`/post/${post.id}`} className="news-card__link">Ары қарай оқу →</a>
            </article>
          ))}
        </div>
      ) : (
        <p>Жаңа посттар әлі жоқ.</p>
      )}
    </div>
  );
}

export default NewPosts;

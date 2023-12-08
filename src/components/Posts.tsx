import { useState, useEffect } from 'react';
import data from '../posts.json';

export default function Posts() {
  interface post {
    id: number;
    type: string;
    title: string;
    subtitle: string;
    image: string;
  }
  const [posts, setPosts] = useState<post[]>([]);

  useEffect(() => {
    const getPosts = () => {
      // TODO
      // Here, we would fetch the post data from a database

      // console.log(data.posts);
      return data.posts;
    };
    const currPosts = getPosts();
    // console.log(currPosts);
    setPosts(currPosts);
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li style={{ listStyleType: 'none' }} key={post.id}>
            <h2 className="posts-titles">{post.title}</h2>
            <img
              src={`/${post.image}.png`}
              width="700"
              height="400"
              alt="streamingSongs"
            />
            <p className="posts-subtitles">{post.subtitle}</p>
            <hr></hr>
          </li>
        ))}
      </ul>
    </>
  );
}

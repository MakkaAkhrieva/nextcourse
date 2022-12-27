import Head from "next/head";
import { useEffect, useState } from "react";
import { MainLayout } from "../components/MainLayout";
import Link from "next/link";
export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const data = await response.json();
      setPosts(data);
    }
    if (!serverPosts) {
      load();
    }
  }, []);
  if (!posts) {
    return (
      <MainLayout>
        <p>Posts are loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`} legacyBehavior>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts: posts,
  };
};

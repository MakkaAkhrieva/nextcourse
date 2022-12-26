import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title="Home page">
      <h1>Hello Next.js</h1>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        <Link href={"/posts"}>Posts</Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas
        necessitatibus dolorem quasi repudiandae dolore, numquam saepe natus
        deleniti distinctio totam doloribus nulla. Doloribus totam recusandae
        quod ipsum animi enim?
      </p>
    </MainLayout>
  );
}

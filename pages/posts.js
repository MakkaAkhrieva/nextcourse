import Head from "next/head";
import { MainLayout } from "../components/MainLayout";
export default function Posts() {
  return (
    <MainLayout>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
    </MainLayout>
  );
}
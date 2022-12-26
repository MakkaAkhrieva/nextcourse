import Link from "next/link";
import Head from "next/head";
export function MainLayout({ children, title = "Next app" }) {
  return (
    <>
      <Head>
        <meta name="keywords" content="Next, React, JavaScript"></meta>
        <meta name="description" content="next app"></meta>
        <meta charSet="utf-8" />
        <title>{title} | Next Course</title>
      </Head>
      <nav>
        <Link className="link" href={"/"}>
          Home
        </Link>
        <Link className="link" href={"/about"}>
          About
        </Link>
        <Link className="link" href={"/posts"}>
          Posts
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          background: darkblue;
          top: 0;
          display: flex;
          jisify-content: space-around;
          align-items: center;
        }
        nav a {
          display: block;
          color: #fff;
          text-decoration: none;
        }
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}

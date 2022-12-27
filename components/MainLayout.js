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
        <Link className="link" href={"/"} legacyBehavior>
          <a>Home</a>
        </Link>
        <Link className="link" href={"/about"} legacyBehavior>
          <a>About</a>
        </Link>
        <Link href={"/posts"} legacyBehavior>
          <a>Posts</a>
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
          justify-content: space-around;
          align-items: center;
        }
        a {
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

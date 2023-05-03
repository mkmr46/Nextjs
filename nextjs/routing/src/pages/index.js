import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <br></br>
      <Link href={'/blog'}>
          <h4>Blogs</h4>
      </Link>
      <br></br>
      <Link href={'/product'}>
      <h4>Products</h4>
      </Link>
    </>
  );
}

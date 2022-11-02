import Head from "next/head";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <NavBar />
      <Banner />
      <ProductFeed />
    </div>
  );
}

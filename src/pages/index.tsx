import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const fetchAPI = async () => {
    await fetch(`/api/users/hello`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(console.log)
      .catch(console.error);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Hello Chat</h1>
    </>
  );
}

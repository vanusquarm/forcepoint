'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter();
  useEffect(()=> {
    if (typeof window !== "undefined") {
      router.push("/transactions");
    }
  },[])

  return (
    <main className="flex justify-center sm:px-12 p-8 h-screen">
    </main>
  );
}

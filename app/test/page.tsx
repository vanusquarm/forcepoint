'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/groups")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{}</p>
    </div>
  );
}


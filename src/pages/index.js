import React, { useEffect, useState } from "react"

export default function Home() {

  const [data, setData] = useState("");
  console.log(data.message)

  useEffect(() => {
    console.log("UseEffect Called");

    const functionCall = async () => {
      const response = await fetch('/.netlify/functions/hello');
      const tempData = await response.json();
      setData(tempData);
    }

    functionCall();
  }, []);

  return <div>{data.message}</div>
}

import React, { useEffect, useState } from "react"
import * as styles from './index.module.css';

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

  return (
    <div className={styles.mycomponent}>{data.message}</div>
  )
}

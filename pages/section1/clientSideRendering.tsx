import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// window. 나 document와 같은 속성을 useEffect 밖에서 사용하면 에러나는데 dynamic을 이용해서 import
const NoSSR = dynamic(() => import('../../components/section1/NoSSR'),{
  ssr : false
})

const Example: NextPage = () => {
  const [data, setData] = useState(0);

  useEffect(()=>{
    const delayInSeconds = 2;
    new Promise<number>((resolve) => 
      setTimeout(()=> resolve(Math.random()), delayInSeconds * 1000)
    ).then((result: number) => setData(result));
  },[])

  return (  
    <div>
      <h1>Client-side data fetching</h1>
      <p>값 :{data}</p>
      <h1>No SSR</h1>
      <NoSSR />
    </div>
  );
}

export default Example
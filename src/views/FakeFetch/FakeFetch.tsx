import React, { useEffect, useState } from 'react';


interface Data {
  title: string;
  content: string;
}

function fakeCall(): Promise<Data> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'Page loaded',
        content: 'Content loaded',
      });
    }, 2000);
  });
}

const FakeFetch = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fakeCall().then((data) => {
      setData(data);
    });
  }, []);


  return (
    <div>
      {
        data ?
          <div>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
          </div>
          :
          <div>Loading...</div>
      }

    </div>
  );

};

export default FakeFetch;

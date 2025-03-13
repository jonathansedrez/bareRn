import React, {useEffect, useState} from 'react';
import useSWR from 'swr';
import {View, Text} from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

const UseEffectFetch = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const startTime = performance.now();
      console.log(`[useEffect] Fetch started at ${startTime.toFixed(2)}ms`);
      const response = await fetch(API_URL);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>useEffect + Fetch</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

const UseSWRFetch = () => {
  const {data} = useSWR(API_URL, async () => {
    console.log(`[SWR] Fetch started at ${performance.now().toFixed(2)}ms`);
    const response = await fetch(API_URL);
    return {data: await response.json()};
  });

  return (
    <View>
      <Text>SWR</Text>
      <Text>{JSON.stringify(data?.data, null, 2)}</Text>
    </View>
  );
};

export const Fetcher = () => {
  console.log(`[Mount] Component mounted at ${performance.now().toFixed(2)}ms`);

  return (
    <>
      <UseEffectFetch />
      <UseSWRFetch />
    </>
  );
};

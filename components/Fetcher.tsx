import React, {useEffect, useState} from 'react';
import useSWR from 'swr';
import {View, Text} from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

const fetcher = async () => {
  const start = performance.now();
  const response = await fetch(API_URL);
  const data = await response.json();
  const end = performance.now();
  return {data, time: end - start};
};

const UseEffectFetch = () => {
  const [data, setData] = useState<any>(null);
  const [loadingTime, setLoadingTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const start = performance.now();
      const response = await fetch(API_URL);
      const result = await response.json();
      const end = performance.now();
      setData(result);
      setLoadingTime(end - start);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>useEffect + Fetch</Text>
      <Text>
        Time: {loadingTime ? `${loadingTime.toFixed(2)} ms` : 'Loading...'}
      </Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

const UseSWRFetch = () => {
  const {data, error} = useSWR(API_URL, fetcher);

  return (
    <View>
      <Text>SWR</Text>
      <Text>
        Time:{' '}
        {data?.time
          ? `${data.time.toFixed(2)} ms`
          : error
          ? 'Error'
          : 'Loading...'}
      </Text>
      <Text>{JSON.stringify(data?.data, null, 2)}</Text>
    </View>
  );
};

export const Fetcher = () => {
  return (
    <>
      <Text>Benchmarking Fetch Methods</Text>
      <UseEffectFetch />
      <UseSWRFetch />
    </>
  );
};

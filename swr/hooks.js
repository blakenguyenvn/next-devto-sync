import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());
const devToFetcher = (url, args) => fetch(url, {
  headers: {
    'api-key': 'xMaDBxz7UZNbP1TKzoixHJ4h',
    'Content-Type': 'application/json'
  }
}).then(res => res.json())

const DEVTO_BASE_URL = "https://dev.to/api";
const API_URL = {
  posts: `${DEVTO_BASE_URL}/articles`,
  myPosts: `${DEVTO_BASE_URL}/articles/me/published`,
  postById: (pid) => `${DEVTO_BASE_URL}/articles/${pid}`
};

export const getArguments = (...args) => {
  return {
    ...args,
    headers: {
      'api-key': 'xMaDBxz7UZNbP1TKzoixHJ4h',
      'Content-Type': 'application/json'
    },
  }
}
export const usePosts = () => {
  const { data, error, isLoading } = useSWR(API_URL.posts, fetcher);

  return {
    posts: data,
    isLoading,
    isError: error
  }
}

export const useMyPosts = () => {
  const { data, error, isLoading } = useSWR(API_URL.myPosts, fetcher);

  return {
    posts: data,
    isLoading,
    isError: error
  }
}

export const usePost = (pid) => {
  console.log(`pid: ${pid}`);
  const { data, error, isLoading } = useSWR(API_URL.postById(pid), fetcher);

  return {
    post: data,
    isLoading,
    isError: error
  }
}
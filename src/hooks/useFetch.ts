export const useFetch = (url: string) => {
  const promise = new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

  // Return the promise
  return promise;
};

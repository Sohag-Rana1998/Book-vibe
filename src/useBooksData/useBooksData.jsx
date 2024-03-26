import { useEffect, useState } from 'react';

const useBooksData = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch('./booksData.json')
      .then(res => res.json())
      .then(data => setBooksData(data));
  }, []);

  return { booksData };
};

export default useBooksData;

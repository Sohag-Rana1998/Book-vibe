import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PagesToRead = () => {
  const books = JSON.parse(localStorage.getItem('read' || '[]'));

  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    books &&
      books.length > 0 &&
      books.map(book => (book.bookName = book.bookName.slice(0, 14)));

    setDisplayData(books);
  }, []);

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const data = displayData;

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = props => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="max-w-7xl bg-gray-100 rounded-2xl flex justify-center items-center container h-screen mx-auto mb-5">
      {displayData && displayData.length > 0 ? (
        <BarChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: 'top' }}
          >
            {displayData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      ) : (
        <div className="text-4xl text-center font-play font-bold">
          Please Add Some Books <br /> To Reading List and Then Come To See This
          Page.
        </div>
      )}
    </div>
  );
};

export default PagesToRead;

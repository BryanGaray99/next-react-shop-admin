import useFetch from '@hooks/useFetch';
import endPoints from '@services/API';
import { Chart } from '@common/Chart';

export default function Dashboard() {
  const products = useFetch(endPoints.products.getProducts(0, 0));
  const categoryData = products?.map((product) => product.category);
  const categoryName = categoryData?.map((category) => category.name);
  const ocurrenceCount = (arr) => arr.reduce((previous, current) => ((previous[current] = ++previous[current] || 1), previous), {});

  // console.log(categoryData);
  // console.log(categoryName);
  const data = {
    datasets: [
      {
        label: 'Categories',
        data: ocurrenceCount(categoryName),
        backgroundColor: ['#FF5733', '#FFC300', '#6FA2E1', '#8E44AD', '#27AE60'],
        boderWidth: 2,
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col m-10">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Dashboard</h2>
          </div>
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <Chart chartData={data} />
          </div>
        </div>
      </div>
    </>
  );
}

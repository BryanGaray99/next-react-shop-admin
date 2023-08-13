import { useState } from 'react';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/API';
import Paginate from '@components/Paginate';
import { Chart } from '@common/Chart';

const PRODUCT_LIMIT = 10;

export default function Dashboard() {
  const products = useFetch(endPoints.products.getProducts(0, 0));
  const categoryData = products?.map((product) => product.category);
  const categoryName = categoryData?.map((category) => category.name);
  const ocurrenceCount = (arr) => arr.reduce((previous, current) => ((previous[current] = ++previous[current] || 1), previous), 
  {});

  // console.log(categoryData);
  // console.log(categoryName);
  const data = {
    datasets: [
      {      
        label: 'Categories',
        data: ocurrenceCount(categoryName),
        backgroundColor: ['#FF5733', '#FFC300', '#6FA2E1', '#8E44AD', '#27AE60'],
        boderWidth: 2,
      }
    ]
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <Chart chartData={data}/>
          </div>
        </div>
      </div>
    </>
  );
}

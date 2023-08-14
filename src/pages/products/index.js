import { useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { deleteProduct } from '@services/API/products';
import Modal from '@common/Modal';
import endPoints from '@services/API';
import Paginate from '@components/Paginate';
import FormProduct from '@components/FormProduct';
import useAlert from '@hooks/useAlert';
import Alert from '@common/Alert';
import axios from 'axios';

const PRODUCT_LIMIT = 10;

export default function Products() {
  const [openModal, setOpenModal] = useState(false);
  const [offsetProducts, setOffsetProducts] = useState(0);
  const { alert, setAlert, toggleAlert } = useAlert();
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const responseProducts = await axios.get(endPoints.products.getProducts(PRODUCT_LIMIT, offsetProducts));
      const responseTotalProducts = await axios.get(endPoints.products.getProducts(0, 0));
      setProducts(responseProducts.data);
      setTotalProducts(responseTotalProducts.data.length);
      console.log(responseTotalProducts.data.length);
    }
    try {
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, [alert]);

  // console.log(products);

  const handleDelete = async (id) => {
    deleteProduct(id)
      .then(() => {
        setAlert({
          active: true,
          message: 'Product deleted successfully!',
          type: 'success',
          autoClose: true,
        });
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: `Error deleting product: ${error}`,
          type: 'error',
          autoClose: true,
        });
      });
  };

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="flex items-center justify-between mt-2 mb-2 mr-7 ml-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">List of Products</h2>
            </div>
            <span className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setOpenModal(true)}
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Add Product
              </button>
            </span>
          </div>
          {totalProducts > 0 && <Paginate totalItems={totalProducts} itemsPerPage={PRODUCT_LIMIT} setOffset={setOffsetProducts} neighbours={3}></Paginate>}
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.map((product) => (
                    <tr key={`Product-Item: ${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 whitespace-normal break-words">{product.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.category.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{`$ ${product.price}`}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-normal break-words">{product.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => handleDelete(product.id)} className="text-indigo-600 hover:text-indigo-900" aria-hidden="true">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal open={openModal} setOpen={setOpenModal}>
        <FormProduct setOpenModal={setOpenModal} setAlert={setAlert} />
      </Modal>
    </>
  );
}

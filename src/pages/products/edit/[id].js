import FormProduct from '@components/FormProduct';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/API';
import useAlert from '@hooks/useAlert';
import Alert from '@common/Alert';

export default function Edit() {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const { alert, setAlert, toggleAlert } = useAlert();

  useEffect(() => {
    const { id } = router.query;
    // console.log(id);
    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    try {
      getProduct();
    } catch (error) {
      //   console.log(error);
    }
  }, [router?.isReady, router?.query]);

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="flex-1 min-w-0 m-10">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Edit a product</h2>
      </div>
      <FormProduct setAlert={setAlert} product={product} />
    </>
  );
}

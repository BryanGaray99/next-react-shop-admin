import axios from 'axios';
import endPoints from '@services/API';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.addProducts, body, config);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProducts(id));
  return response.data;
}

const upadteProduct = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.products.updateProducts(id), body, config);
  return response.data;
};

export { addProduct, deleteProduct, upadteProduct };

import axios from "axios";
// import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getProducts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}product/`);

  return response.data;
};

const createProduct = async (product) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}product/`, product, config);

  return response.data;
};

const productService = {
  getProducts,
  createProduct,
};

export default productService;

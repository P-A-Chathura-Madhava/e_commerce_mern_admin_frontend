import axios from "axios";
// import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getProductCategories = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}category/`);

  return response.data;
};

const getProductCategory = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}category/${id}`, config);

  return response.data;
};

const createCategory = async (category) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}category/`, category, config);

  return response.data;
};

const deleteProductCategory = async (id) => {
  const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}category/${id}`, config);

  return response.data;
};

const updateProductCategory = async (category) => {
  console.log(category);
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}category/${category.id}`,
    { title: category.pCatData.title },
    config
  );

  return response.data;
};

const pCategoryService = {
  getProductCategories,
  createCategory,
  getProductCategory,
  deleteProductCategory,
  updateProductCategory,
};

export default pCategoryService;

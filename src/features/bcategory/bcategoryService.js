import axios from "axios";
// import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getBlogCategories = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}blogcategory/`);

  return response.data;
};
const createBlogCategory = async (bcat) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}blogcategory/`, bcat, config);

  return response.data;
};
const updateBlogCategory = async (blogCat) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}blogcategory/${blogCat.id}`,
    { title: blogCat.blogCatData.title },
    config
  );

  return response.data;
};
const getBlogCategory = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}blogcategory/${id}`, config);

  return response.data;
};

const deleteBlogCategory = async (id) => {
  const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}blogcategory/${id}`, config);

  return response.data;
};
const bCategoryService = {
  getBlogCategories,
  createBlogCategory,
  deleteBlogCategory,
  getBlogCategory,
  deleteBlogCategory,
  updateBlogCategory,
};

export default bCategoryService;

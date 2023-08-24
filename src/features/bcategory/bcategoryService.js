import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getBlogCategories = async () => {
  const response = await axios.get(`${base_url}blogcategory/`);

  return response.data;
};

const createBlogCategory = async (bcat) => {
  const response = await axios.post(`${base_url}blogcategory/`, bcat, config);

  return response.data;
};

const bCategoryService = {
  getBlogCategories,
  createBlogCategory,
};

export default bCategoryService;

import axios from "axios";
// import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getBlogs = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}blog/`);

  return response.data;
};
const createBlog = async (blog) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}blog/`, blog, config);

  return response.data;
};
const updateBlog = async (blog) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}blog/${blog.id}`,
    {
      title: blog.blogData.title,
      description: blog.blogData.description,
      category: blog.blogData.category,
      images: blog.blogData.images,
    },
    config
  );

  return response.data;
};
const getBlog = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}blog/${id}`, config);

  return response.data;
};

const deleteBlog = async (id) => {
  const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}blog/${id}`, config);

  return response.data;
};
const blogService = {
  getBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};

export default blogService;

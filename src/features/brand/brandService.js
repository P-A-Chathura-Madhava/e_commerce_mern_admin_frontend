import axios from "axios";
// import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getBrands = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}brand/`);

  return response.data;
};

const createBrand = async (brand) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}brand/`, brand, config);

  return response.data;
};

const getBrand = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}brand/${id}`, config);

  return response.data;
};

const updateBrand = async (brand) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}brand/${brand.id}`,
    { title: brand.brandData.title },
    config
  );

  return response.data;
};

const deleteBrand = async (id) => {
  const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}brand/${id}`, config);

  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
};

export default brandService;

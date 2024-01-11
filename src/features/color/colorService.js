import axios from "axios";
// import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getColors = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}color/`);

  return response.data;
};
const createColor = async (color) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}color/`, color, config);

  return response.data;
};

const updateColor = async (color) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}color/${color.id}`,
    { title: color.colorData.title },
    config
  );

  return response.data;
};
const getColor = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}color/${id}`, config);

  return response.data;
};

const deleteColor = async (id) => {
  const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}color/${id}`, config);

  return response.data;
};
const colorService = {
  getColors,
  createColor,
  updateColor,
  getColor,
  deleteColor,
};

export default colorService;

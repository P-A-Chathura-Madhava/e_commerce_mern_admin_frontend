import axios from "axios";
import { config } from "../../utils/axiosconfig";
// import { base_url } from "../../utils/base_url";

const uploadImg = async (data) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}upload/`, data, config);
  return response.data;
};

const deleteImg = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BASE_URL}upload/delete-img/${id}`,

    config
  );
  return response.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;

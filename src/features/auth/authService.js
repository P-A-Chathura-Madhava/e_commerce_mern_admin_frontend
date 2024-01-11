import axios from "axios";
import { config } from "../../utils/axiosconfig";
// import { base_url } from "../../utils/base_url";
const login = async (user) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const register = async (user) => {
  // console.log(user);
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}user/register`, user);
  // if (response.data) {
    // localStorage.setItem("user", JSON.stringify(response.data));
  // }
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}user/getallorders`, config);

  return response.data;
};

const getOrder = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}user/getaOrder/${id}`, config);

  return response.data;
};

const updateOrder = async (data) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}user/updateOrder/${data.id}`,
    { status: data.status },
    config
  );

  return response.data;
};

const getMonthlyOrders = async (data) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}user/getMonthWiseOrderIncome`,
    data
  );

  return response.data;
};

const getYearlyStats = async (data) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}user/getyearlyorders`, data);

  return response.data;
};

const authService = {
  register,
  login,
  getOrders,
  getOrder,
  getMonthlyOrders,
  getYearlyStats,
  updateOrder,
};

export default authService;

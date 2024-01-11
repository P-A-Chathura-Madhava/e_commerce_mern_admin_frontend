import axios from "axios";
import { config } from "../../utils/axiosconfig";
// import { base_url } from "../../utils/base_url";
const getCoupons = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}coupon/`, config);

  return response.data;
};

const createCoupons = async (coupon) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}coupon/`, coupon, config);

  return response.data;
};
const updateCoupon = async (coupon) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}coupon/${coupon.id}`,
    {
      name: coupon.couponData.name,
      expiry: coupon.couponData.expiry,
      discount: coupon.couponData.discount,
    },
    config
  );

  return response.data;
};
const getCoupon = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}coupon/${id}`, config);

  return response.data;
};

const deleteCoupon = async (id) => {
  const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}coupon/${id}`, config);

  return response.data;
};
const couponService = {
  getCoupons,
  createCoupons,
  deleteCoupon,
  getCoupon,
  updateCoupon,
};

export default couponService;

import axios from "axios";
// import { base_url } from "../../utils/base_url";

const getUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}user/all-users`);

  return response.data;
};

const customerService = {
  getUsers,
};

export default customerService;

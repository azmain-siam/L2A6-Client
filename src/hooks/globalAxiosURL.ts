import axios from "axios";

const URL = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API}`,
  // baseURL: "http://localhost:3002/api",
});

const useAxios = () => {
  return URL;
};

export default useAxios;

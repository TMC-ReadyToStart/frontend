import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3033",
});

export const uploadFile = async (file: File) => {
  const response = await api.post("/upload", file, {
    headers: {
      "Content-Type": "application/zip",
    },
  });
};

export default api;

import axios from "axios";

// const endPoint = process.env.API_URL;
// const endPoint = "http://localhost:3001";
const endPoint = "https://peakbag-server.herokuapp.com";

const axiosInstance = () =>
  axios.create({
    baseURL: endPoint,
    time0ut: 10000,
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    }
  });

export const makeApiRequest = config =>
  axiosInstance()
    .request(config)
    .then(response => ({ response }))
    .catch(error => ({ response: {}, error }));

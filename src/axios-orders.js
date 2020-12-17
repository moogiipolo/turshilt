import axios from "axios";

const instance = axios.create({
  baseURL: "https://moogiipolollc.firebaseio.com/"
});

export default instance;

import axios from "axios";

const BASE_URL = "https://fair-cyan-catfish-cape.cyclic.app/api/";
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// .currentUser.accessToken;
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
//console.log(
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

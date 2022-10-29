import axios from "axios";

const BASE_URL = "https://fair-cyan-catfish-cape.cyclic.app/api/";
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// .currentUser.accessToken;
//const TOKEN =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTY1NWUxY2M5ZjViNWE4ZGY3NDM3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzAzMzg0NSwiZXhwIjoxNjY3MjkzMDQ1fQ._JyNlZExaCjRW_BuAfxID8TBPRSH93KoZZQIJ8FIob4";
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

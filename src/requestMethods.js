import axios from "axios";

const BASE_URL = "https://fair-cyan-catfish-cape.cyclic.app/api/";
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//  .currentUser.accessToken;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTY1NWUxY2M5ZjViNWE4ZGY3NDM3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Njc2NzAxOSwiZXhwIjoxNjY3MDI2MjE5fQ.H_Ov-QvbrH8f93cPC6k3ZoFk3u7Layj5aqt-Do_xS1I";

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

import axios from "axios";

const BASE_URL = "https://fair-cyan-catfish-cape.cyclic.app/api/";
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// .currentUser.accessToken;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzU0OGQ1OTk0YjI1YzM1MmJlOWU0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjE4MzA4MywiZXhwIjoxNjY2NDQyMjgzfQ.qvSsokEEvKho0d6Lr4WFhqA5WnWL3jGBnw0uW9SkMGE";

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

import axios from "axios";

export function getTokne(){
  return localStorage.getItem("token")
}

export default function () {
  return axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      Authorization: getTokne()
    },
  });
}

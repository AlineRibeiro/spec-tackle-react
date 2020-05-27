import { baseUrl } from "../config";

export const Test = {
  index() {
    return fetch(`${baseUrl}/tests`, {
      credentials: "include"
    }).then(res => res.json());
  }
};
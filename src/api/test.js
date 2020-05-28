import { baseUrl } from "../config";

export const Test = {
  index() {
    return fetch(`${baseUrl}/tests`, {
    }).then(res => res.json());
  }
};


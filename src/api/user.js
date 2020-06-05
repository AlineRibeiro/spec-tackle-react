import { baseUrl } from "../config";

export const User = {
  index() {
    return fetch(`${baseUrl}/users`, {}).then((res) => res.json());
  }
};
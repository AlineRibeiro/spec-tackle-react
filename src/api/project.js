import { baseUrl } from "../config";

export const Project = {
  index() {
    return fetch(`${baseUrl}/projects`, {
    }).then(res => res.json());
  }
};


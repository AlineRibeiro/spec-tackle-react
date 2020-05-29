import { baseUrl } from "../config";

export const Project = {
  index() {
    return fetch(`${baseUrl}/projects`, {
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${baseUrl}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(res => res.json());

  }
};






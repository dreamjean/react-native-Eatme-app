import { create } from "apisauce";

import { apiKey } from "./apiKey";

const apiClient = create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default apiClient;

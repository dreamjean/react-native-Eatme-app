import client from "./client";

const endpoint = "/search";

const getBusinesses = (searchTerm) =>
  client.get(endpoint, {
    limit: 50,
    term: searchTerm,
    location: "san jose",
  });

export default {
  getListings: getBusinesses,
};

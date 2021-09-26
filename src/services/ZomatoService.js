import { doGet } from "./apiService";

const baseUrl = "https://developers.zomato.com";
const serviceUrl = "/api/v2.1";

export const queryBuilder = params => {
  const qs = Object.keys(params)
    .filter(key => params[key])
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&");
  return "?".concat(qs);
};

/* 
categories
cities
collections
cuisines
establishments
geocode
location_details
locations
dailymenu
restaurant
reviews
search
*/
export const getData = (queryBy, params) => {
  return doGet(
    baseUrl,
    `${serviceUrl}/${queryBy}`,
    params && queryBuilder(params)
  );
};

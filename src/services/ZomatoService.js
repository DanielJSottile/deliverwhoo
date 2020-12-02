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

export const getCategories = () => {
  return doGet(baseUrl, `${serviceUrl}/categories`);
};

export const getCities = params => {
  return doGet(baseUrl, `${serviceUrl}/cities`, queryBuilder(params));
};

export const getCollections = params => {
  return doGet(baseUrl, `${serviceUrl}/collections`, queryBuilder(params));
};

export const getCuisines = params => {
  return doGet(baseUrl, `${serviceUrl}/cuisines`, queryBuilder(params));
};

export const getEstablishments = params => {
  return doGet(baseUrl, `${serviceUrl}/establishments`, queryBuilder(params));
};

export const getGeocode = params => {
  return doGet(baseUrl, `${serviceUrl}/geocode`, queryBuilder(params));
};

export const getLocationDetails = params => {
  return doGet(baseUrl, `${serviceUrl}/location_details`, queryBuilder(params));
};

export const getLocations = params => {
  return doGet(baseUrl, `${serviceUrl}/locations`, queryBuilder(params));
};

export const getDailyMenu = params => {
  return doGet(baseUrl, `${serviceUrl}/dailymenu`, queryBuilder(params));
};

export const getRestaurant = params => {
  return doGet(baseUrl, `${serviceUrl}/restaurant`, queryBuilder(params));
};

export const getReviews = params => {
  return doGet(baseUrl, `${serviceUrl}/reviews`, queryBuilder(params));
};

export const getSearch = params => {
  return doGet(baseUrl, `${serviceUrl}/search`, queryBuilder(params));
};

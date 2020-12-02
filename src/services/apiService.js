const buildConfig = config => {
  return {
    ...config,
    headers: {
      "user-key": `${process.env.VUE_APP_API_KEY}`,
      Accept: "application/json"
    }
  };
};

const parseJson = res => {
  return new Promise(resolve =>
    res.json().then(data =>
      resolve({
        status: res.status,
        statusText: res.statusText,
        data
      })
    )
  );
};

const makeRequest = (baseUrl, uri, query = "", config) => {
  return fetch(`${baseUrl}${uri}${query}`, buildConfig(config))
    .then(parseJson)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.json.message);
      } else {
        return res.data;
      }
    });
};

export const doGet = (baseUrl, uri, query) => {
  return makeRequest(baseUrl, uri, query, {
    method: "GET"
  });
};

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

const apiKey = `?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`;

function get(endpoint) {
  const requestOptions = {
    method: "GET",
  };

  const API_URL = `${process.env.REACT_APP_API_URL}${endpoint}${apiKey}`;
  return fetch(API_URL, requestOptions).then(handleResponse);
}

function post(endpoint, body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const API_URL = `${process.env.REACT_APP_API_URL}${endpoint}${apiKey}`;
  return fetch(API_URL, requestOptions).then(handleResponse);
}

function put(endpoint, body) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const API_URL = `${process.env.REACT_APP_API_URL}${endpoint}${apiKey}`;
  return fetch(API_URL, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(endpoint) {
  const requestOptions = {
    method: "DELETE",
  };

  const API_URL = `${process.env.REACT_APP_API_URL}${endpoint}${apiKey}`;
  return fetch(API_URL, requestOptions).then(handleResponse);
}

// helper functions

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

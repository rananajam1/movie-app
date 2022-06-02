export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

const accessToken = process.env.REACT_APP_MOVIE_DB_AUTH_TOKEN;

function get(endpoint) {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const API_URL = `${process.env.REACT_APP_API_URL}${endpoint}`;
  return fetch(API_URL, requestOptions).then(handleResponse);
}

function post(endpoint, body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  };
  return fetch(endpoint, requestOptions).then(handleResponse);
}

function put(endpoint, body) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  };
  return fetch(endpoint, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(endpoint) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return fetch(endpoint, requestOptions).then(handleResponse);
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

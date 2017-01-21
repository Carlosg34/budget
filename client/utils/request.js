function getHeaders() {
  const token = localStorage.getItem('token')

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  if(token) {
    return {
      ...headers,
      Authorization: 'Bearer ' + token
    }
  } else {
    return headers
  }

}

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}

function parseJSON(response) {
  return response.json()
}

export default function request(url, method = 'GET', data) {

  return fetch(url, {
    method: method,
    headers: getHeaders(),
    body: JSON.stringify(data)
  })
  .then(checkStatus)
  .then(parseJSON)
  .catch(error => {
    return error.json().then(err => {
      return Promise.reject(err)
    })
  })
}

const BASE_URL = 'http://localhost:3000/api'
const url = (e) => `${BASE_URL}${e}`

function api() {
  return {
    async get(endpoint) {
      const response = await fetch(endpoint(url))
      return response.json()
    },
    async post(endpoint, data) {
      const response = await fetch(endpoint(url), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return response.json()
    },
    async delete(endpoint) {
      const response = await fetch(endpoint(url), {
        method: 'DELETE'
      })
      return response.json()
    }
  }
}

export default api

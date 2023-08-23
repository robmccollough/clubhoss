const BASE_URL = 'http://localhost:3000/api'
const url = (e) => `${BASE_URL}${e}`

function api() {
  return {
    async get(endpoint) {
      const response = await fetch(url(endpoint))
      return response.json()
    },
    async post(endpoint, data) {
      const response = await fetch(url(endpoint), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return response.json()
    },
    async delete(endpoint) {
      const response = await fetch(url(endpoint), {
        method: 'DELETE'
      })
      return response.json()
    }
  }
}

export default api

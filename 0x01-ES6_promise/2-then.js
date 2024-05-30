export default function handleResponseFromAPI(promise) {
  return promise
    .the(() => ({ status: 200, body: 'Success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from API'));
}

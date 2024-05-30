export default function getFullResponseFromApi(success) {
  return Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    }
    reject('The fake API is not working currently');
  });
}

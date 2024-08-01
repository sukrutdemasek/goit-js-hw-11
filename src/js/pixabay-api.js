export default function searchImage(query) {
  const apiKey = '45177339-1086f924218083686626b70b0';
  const pixabayUrl = 'https://pixabay.com/api/';
  const url = `${pixabayUrl}?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true;`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })

    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `${error}`,
      });
    });
}

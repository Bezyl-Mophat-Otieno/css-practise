const gridContainer = document.querySelector('.grid-container');
// fetching random images from pixabay api
// Pixabay API Key
const API_KEY = '38362795-da8f36ddaa2f912e2f41af4b4';
const COUNT = 30; // Number of Images
const API_ENDPOINT = `https://pixabay.com/api/?key=${API_KEY}&q=nature&per_page=${COUNT}&safesearch=true`;

  // Function to fetch images from an API
  async function fetchImages() {
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();

      return data.hits;
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }  

  window.onload = async ()=>{

    const images = await fetchImages();
    console.log(images);
    let html = ''
    images.map((image)=>{
        console.log(image);
        console.log(image.largeImageURL);
        html += `
          <img src=${image.largeImageURL} height=${image.webformatHeight} alt="">
        `
    })
    gridContainer.innerHTML = html;

  }
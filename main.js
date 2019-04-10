// <div class="img">
//   <img src="images/1.png" class="contain" alt="">
// </div>

const $imageGrid = document.querySelector('.image-grid');


// Array holding our image objects
const images = [
  {
    image: "https://source.unsplash.com/random/800x800",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/900x800",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/940x800",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/930x800",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/920x800",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/910x800",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/960x800",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/970x800",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/980x800",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/990x800",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x810",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x820",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x830",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x840",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x850",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x860",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x870",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x880",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x890",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x900",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x910",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x920",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x930",
    alt: "Random Image"
  },
  {
    image: "https://source.unsplash.com/random/950x940",
    alt: "Random Image"
  },

];



// array to hold image html
const imagehtml = [];

// pushes images into imagehtml array
for(let i = 0; i < images.length; i++){
  imagehtml.push(`<div class="image">`);
  imagehtml.push(`<img class="image-link cover" src="${images[i].image}" alt="${images[i].alt}">`);
  imagehtml.push(`</div>`);
}

// Adds image array to the HTML page
$imageGrid.innerHTML = imagehtml.join('');

const $imageForm = document.querySelector('.image-form');
const $addIcon = document.querySelector('#add-icon');
const $subtractIcon = document.querySelector('#subtract-icon');

$addIcon.addEventListener('click', function(){
    $imageForm.style.top = 0;
    $addIcon.style.display = 'none';
    $subtractIcon.style.display = 'block';
});

$subtractIcon.addEventListener('click', function(){
  $imageForm.style.top = '-400px';
  $addIcon.style.display = 'block';
  $subtractIcon.style.display = 'none';
});


const $modal = document.querySelector('.modal');

$imageGrid.addEventListener('click', function(event){
  const $item = event.target.closest('.image');
  const $src = event.target.closest('img').src
  const $alt = event.target.closest('img').alt

  if($item) {
    $modal.style.display= "flex";
    const $modalHtml = [];

    $modalHtml.push(`<div class="modal-content">`);
    $modalHtml.push(`<span class="closeBtn">&times;</span>`);
    $modalHtml.push(`<img src="${$src}" alt="">`);
    $modalHtml.push(`</div>`);
    $modal.innerHTML = $modalHtml.join('');
  }
});

$modal.addEventListener('click', function(){
  $modal.style.display = 'none';
})

// <div class="img">
//   <img src="images/1.png" class="contain" alt="">
// </div>

const $imageGrid = document.querySelector('.image-grid');



// Array holding our image objects
const images = [
  {
    image: "images/1.jpeg",
    alt: "Photo of our passports"
  },
  {
    image: "images/2.jpeg",
    alt: "Atlantic Ocean"
  },
  {
    image: "images/3.jpeg",
    alt: "Puppy with cute hat"
  },
  {
    image: "images/4.jpeg",
    alt: "Sitting infront of the whitehouse."
  },
  {
    image: "images/5.jpeg",
    alt: "Sanfransisco transit"
  },
  {
    image: "images/6.jpeg",
    alt: "Ocean drone photography"
  },
  {
    image: "images/7.jpeg",
    alt: "Vintage car"
  },
  {
    image: "images/8.jpeg",
    alt: "Busy crosswalk"
  },
  {
    image: "images/9.jpeg",
    alt: "Flying Drone"
  },
  {
    image: "images/10.jpeg",
    alt: "Desert photography"
  },
  {
    image: "images/11.jpeg",
    alt: "Louis Vitton headquarters"
  },
  {
    image: "images/12.jpeg",
    alt: "Vintage Car"
  }

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

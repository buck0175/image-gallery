// <div class="img">
//   <img src="images/1.png" class="contain" alt="">
// </div>

const $imageGrid = document.querySelector('.image-grid');


// Array holding our image objects
const images = [
  {
    image: "images/1.png",
  },
  {
    image: "images/2.png",
  },
  {
    image: "images/3.png",
  },
  {
    image: "images/4.png",
  },
  {
    image: "images/5.jpeg",
  },
  {
    image: 'images/6.jpeg',
  },
  {
    image: "images/7.jpeg",
  },
  {
    image: "images/8.jpeg",
  },
  {
    image: "images/9.jpeg",
  },
  {
    image: "images/10.jpeg",
  },
  {
    image: "images/11.jpeg",
  },
  {
    image: "images/12.jpeg",
  }
];



// array to hold image html
const imagehtml = [];

// pushes images into imagehtml array
for(let i = 0; i < images.length; i++){
  imagehtml.push(`<div class="image">`);
  imagehtml.push(`<img class="image-link cover" src="${images[i].image}" alt="">`);
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

  if($item) {
    $modal.style.display= "block";
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

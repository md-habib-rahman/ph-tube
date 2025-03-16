function loadCategories() {
  //fetch categories

  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVidoes(data.videos));
}

function displayCategories(categories) {
  console.log(categories);
  const categoryContainer = document.getElementById("category-container");
  for (element of categories) {
    const catetoryButton = document.createElement("button");
    catetoryButton.innerText = element.category;
    catetoryButton.classList.add(
      "btn",
      "btn-sm",
      "hover:bg-[#FF1F3D]",
      "hover:text-white"
    );
    categoryContainer.appendChild(catetoryButton);
  }
}

const displayVidoes = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videos.forEach((element) => {
    console.log(element);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
	<div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${element.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${element.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
	`;
    videoContainer.appendChild(videoCard);
  });
};

loadCategories();

loadVideos();

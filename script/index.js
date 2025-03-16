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
	<div class="card bg-base-100">
			<figure class="relative">
				<img class="w-full h-[250px] object-cover" src="${element.thumbnail}" alt="video thumbnail" />
				<span class="absolute bottom-2 right-2 text-white bg-black px-2 rounded">3hrs 56 min ago</span>
			</figure>
			<div class="flex gap-3 px-0 py-5">
				<div class="profile">
					<div class="avatar">
						<div class="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
							<img src="${element.authors[0].profile_picture}" />
						</div>
					</div>
				</div>
				<div class="intro">
					<h2 class="text-xl font-bold">${element.title}</h2>
					<p class="text-gray-400 flex items-center gap-4">${element.authors[0].profile_name} <img class="w-6"
							src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
					<p class="text-gray-400">${element.others.views}</p>
				</div>
			</div>
		</div>
	`;
    videoContainer.appendChild(videoCard);
  });
};

loadCategories();

loadVideos();

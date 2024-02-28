const formTV = document.querySelector("#SearchForm");
formTV.addEventListener("submit", async function (e) {
  e.preventDefault();
  const SHOW = formTV.elements.query.value;
  const response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${SHOW}`
  );
  console.log(response.data);

  const imgContainer = document.querySelector("#imageContainer");
  const existingImg = document.querySelector("#showImage");

  if (existingImg) {
    existingImg.remove();
  }

  const img = document.createElement("img");
  img.id = "showImage";
  img.src = response.data[0].show.image.medium;
  imgContainer.appendChild(img);
});

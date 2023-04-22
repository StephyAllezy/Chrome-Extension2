const image = document.createElement("img");

document.querySelector(".pic").appendChild(image);
const renderImg = function (url) {
  image.setAttribute("src", url);
};

document.querySelector("button").addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => renderImg(res.message));
  // .then(console.log(res));
});

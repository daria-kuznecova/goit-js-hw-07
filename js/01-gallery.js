import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="large-image.jpg"
      alt="${item.description}"
    />
  </a>
</li>`;
  })
  .join("");

list.insertAdjacentHTML("beforeend", markup);

list.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target);

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  list.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close;
    }
  });
}

console.log(galleryItems);

import { galleryItems } from "./gallery-items.js";
// Change code below this line

function renderGallery(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`
    )
    .join("");
}

const listRef = document.querySelector(".gallery");
const galleryLayout = renderGallery(galleryItems);

listRef.insertAdjacentHTML("beforeend", galleryLayout);

function handleGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const obj = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}">
    </div>
`);
  obj.show();

  const modalRef = document.querySelector(".modal");

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      obj.close();
    }
  });

  modalRef.addEventListener("click", () => {
    obj.close();
  });
}

listRef.addEventListener("click", handleGalleryClick);

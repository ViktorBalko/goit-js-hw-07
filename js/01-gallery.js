import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryCreate = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryCreate);

function createGalleryMarkup(elements) {
  return elements.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href='${original}'>
            <img class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'/>
          </a>
       </div>`;
    }).join("");
}

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

const specimen = basicLightbox.create(`<img src=${event.target.dataset.source} width="800" height="600" alt=${event.target.alt}>`);

    specimen.show();
    
  galleryList.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      specimen.close();
    }
  });
}

galleryList.addEventListener("click", onGalleryClick);
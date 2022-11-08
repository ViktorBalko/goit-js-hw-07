import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

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
};

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

    const template = basicLightbox.create(`
    <img src=${event.target.dataset.source} 
    width="800"
    height="600" alt=${event.target.alt}>`);

  template.show();
    
  galleryList.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      template.close();
    }
  });
}

  galleryList.addEventListener("click", onGalleryClick);
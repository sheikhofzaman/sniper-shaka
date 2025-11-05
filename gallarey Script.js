// Function to load the gallery images
function loadGallery() {
    const galleryContainer = document.getElementById('gallery-container');

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.onclick = () => openLightbox(image.src, image.alt);

        galleryContainer.appendChild(imgElement);
    });
}

// Function to open the lightbox with the clicked image
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');

    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');

    lightbox.style.display = 'block';
    lightboxImg.src = src;
    caption.textContent = alt;
}

// Function to close the lightbox
document.querySelector('.close').onclick = function() {
    document.getElementById('lightbox').style.display = 'none';
};

// Load the gallery when the page is loaded
window.onload = loadGallery;
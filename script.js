// NUMERO DE TELEFONO DE CONTACTO ACTUALIZADO
const PHONE_NUMBER = "5493888650351";

// Lista exacta de las imágenes subidas en el repositorio
const imagesList = [
    "WhatsApp Image 2026-07-23 at 13.33.22.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.26.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.27 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.27.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.28 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.28.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.29.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.30 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.30.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.31 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.31.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.32.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.33 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.33 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.33.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.34 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.34.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.35 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.35 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.35.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.36 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.36 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.36.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.37.jpeg",
    "WhatsApp Image 2026-07-23 at 13.35.05 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.35.05.jpeg",
    "WhatsApp Image 2026-07-23 at 13.35.06.jpeg",
    "WhatsApp Image 2026-07-23 at 13.35.07.jpeg",
    "WhatsApp Image 2026-07-23 at 13.35.09.jpeg",
    "WhatsApp Image 2026-07-23 at 14.03.05.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.28 (1).jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.28.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.29.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.30.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.31 (1).jpeg",
   "WhatsApp Image 2026-08-05 at 18.58.31 (2).jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.57.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.58.jpeg"
];

const galleryContainer = document.getElementById('gallery');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('imgFull');
const captionText = document.getElementById('caption');
const modalWaBtn = document.getElementById('modalWaBtn');

// Generar tarjetas
galleryContainer.innerHTML = '';
imagesList.forEach((filename, index) => {
    const imgPath = encodeURIComponent(filename);
    const itemTitle = `Modelo / Trofeo #${index + 1}`;
    
    const card = document.createElement('div');
    card.className = 'card';
    
    const waText = encodeURIComponent(`Hola! Quiero consultar por el ${itemTitle}`);
    const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${waText}`;

    card.innerHTML = `
        <div class="img-container" onclick="openZoom('${imgPath}', '${itemTitle}', '${waUrl}')">
            <img src="${imgPath}" alt="${itemTitle}" loading="lazy">
        </div>
        <div class="card-body">
            <div class="card-title">${itemTitle}</div>
            <a href="${waUrl}" target="_blank" class="btn-card-wa">
                <i class="fa-brands fa-whatsapp"></i> Consultar por WhatsApp
            </a>
        </div>
    `;
    
    galleryContainer.appendChild(card);
});

// Abrir Zoom
function openZoom(src, title, waLink) {
    modal.style.display = "flex";
    modalImg.src = src;
    captionText.innerHTML = title;
    modalWaBtn.href = waLink;
}

// Cerrar Modal
document.querySelector('.close-modal').onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modal.style.display = "none";
    }
});

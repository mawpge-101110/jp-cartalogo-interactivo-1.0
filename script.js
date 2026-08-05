const galleryContainer = document.getElementById('gallery');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('imgFull');
const captionText = document.getElementById('caption');
const modalWaBtn = document.getElementById('modalWaBtn');
const closeModal = document.getElementsByClassName('close-modal')[0];

const phoneNumber = "5493888650351";

// Lista con tus 52 imágenes
const imagesList = [
    "WhatsApp Image 2026-07-23 at 13.33.22.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.26.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.27.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.27 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.28.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.28 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.29.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.30.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.30 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.31 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.31.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.32.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.33.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.33 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.33 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.34 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.34.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.35.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.35 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.35 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.36.jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.36 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.36 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 13.33.37.jpeg",
    "WhatsApp Image 2026-07-23 at 13.35.05.jpeg",
    "WhatsApp Image 2026-07-23 at 13.35.05 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 13.35.06.jpeg",
    "WhatsApp Image 2026-07-23 at 13.35.07.jpeg",
    "WhatsApp Image 2026-07-23 at 13.35.09.jpeg",
    "WhatsApp Image 2026-07-23 at 14.03.05.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.56 (1).jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.56.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.57.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.19.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.20.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.21.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.22.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.28.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.28 (1).jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.29.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.30.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.31 (1).jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.31.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.31 (2).jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.32.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.32 (1).jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.32 (2).jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.33.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.33 (1).jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.33 (2).jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.34.jpeg",
    "WhatsApp Image 2026-08-05 at 18.58.34 (1).jpeg"
];

// Generar la galería dinámicamente
imagesList.forEach((filename, index) => {
    const card = document.createElement('div');
    card.classList.add('gallery-card');

    const img = document.createElement('img');
    img.src = filename;
    img.alt = `Modelo / Trofeo #${index + 1}`;
    img.loading = "lazy";

    const title = document.createElement('p');
    title.innerText = `Modelo / Trofeo #${index + 1}`;

    const btn = document.createElement('button');
    btn.classList.add('btn-consultar');
    btn.innerText = 'Consultar Modelo';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(btn);

    // Evento al hacer clic en una tarjeta
    card.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = filename;
        captionText.innerHTML = `Modelo / Trofeo #${index + 1}`;
        
        const textMessage = encodeURIComponent(`Hola! Me interesa consultar por el Modelo / Trofeo #${index + 1} de la página web.`);
        modalWaBtn.href = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    });

    galleryContainer.appendChild(card);
});

// Cerrar Modal al hacer clic en la X o fuera del contenido
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

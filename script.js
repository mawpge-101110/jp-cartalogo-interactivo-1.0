const galleryContainer = document.getElementById('gallery');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('imgFull');
const captionText = document.getElementById('caption');
const modalWaBtn = document.getElementById('modalWaBtn');
const closeModal = document.getElementsByClassName('close-modal')[0];

const phoneNumber = "5493888650351";

// Configuración de la paginación
let currentPage = 1;
const itemsPerPage = 12; // Cantidad de productos por página (podés cambiarlo si querés más o menos)

// Lista completa unificada con todos los productos (del 1 al 40)
const imagesList = [
    { id: 1, title: "Modelo #1", img: "WhatsApp Image 2026-07-23 at 13.33.22.jpeg" },
    { id: 2, title: "Modelo #2", img: "WhatsApp Image 2026-07-23 at 13.33.26.jpeg" },
    { id: 3, title: "Modelo #3", img: "WhatsApp Image 2026-07-23 at 13.33.27.jpeg" },
    { id: 4, title: "Modelo #4", img: "WhatsApp Image 2026-07-23 at 13.33.27 (1).jpeg" },
    { id: 5, title: "Modelo #5", img: "WhatsApp Image 2026-07-23 at 13.33.28.jpeg" },
    { id: 6, title: "Modelo #6", img: "WhatsApp Image 2026-07-23 at 13.33.28 (1).jpeg" },
    { id: 7, title: "Modelo #7", img: "WhatsApp Image 2026-07-23 at 13.33.29.jpeg" },
    { id: 8, title: "Modelo #8", img: "WhatsApp Image 2026-07-23 at 13.33.30.jpeg" },
    { id: 9, title: "Modelo #9", img: "WhatsApp Image 2026-07-23 at 13.33.30 (1).jpeg" },
    { id: 10, title: "Modelo #10", img: "WhatsApp Image 2026-07-23 at 13.33.31 (1).jpeg" },
    { id: 11, title: "Modelo #11", img: "WhatsApp Image 2026-07-23 at 13.33.31.jpeg" },
    { id: 12, title: "Modelo #12", img: "WhatsApp Image 2026-07-23 at 13.33.32.jpeg" },
    { id: 13, title: "Modelo #13", img: "WhatsApp Image 2026-07-23 at 13.33.33.jpeg" },
    { id: 14, title: "Modelo #14", img: "WhatsApp Image 2026-07-23 at 13.33.33 (1).jpeg" },
    { id: 15, title: "Modelo #15", img: "WhatsApp Image 2026-07-23 at 13.33.33 (2).jpeg" },
    { id: 16, title: "Modelo #16", img: "WhatsApp Image 2026-07-23 at 13.33.34 (1).jpeg" },
    { id: 17, title: "Modelo #17", img: "WhatsApp Image 2026-07-23 at 13.33.34.jpeg" },
    { id: 18, title: "Modelo #18", img: "WhatsApp Image 2026-07-23 at 13.33.35.jpeg" },
    { id: 19, title: "Modelo #19", img: "WhatsApp Image 2026-07-23 at 13.33.35 (1).jpeg" },
    { id: 20, title: "Modelo #20", img: "WhatsApp Image 2026-07-23 at 13.33.35 (2).jpeg" },
    { id: 21, title: "Modelo #21", img: "WhatsApp Image 2026-07-23 at 13.33.36.jpeg" },
    { id: 22, title: "Modelo #22", img: "WhatsApp Image 2026-07-23 at 13.33.36 (1).jpeg" },
    { id: 23, title: "Modelo #23", img: "WhatsApp Image 2026-07-23 at 13.33.36 (2).jpeg" },
    { id: 24, title: "Modelo #24", img: "WhatsApp Image 2026-07-23 at 13.33.37.jpeg" },
    { id: 25, title: "Modelo #25", img: "WhatsApp Image 2026-07-23 at 13.35.05.jpeg" },
    { id: 26, title: "Modelo #26", img: "WhatsApp Image 2026-07-23 at 13.35.05 (1).jpeg" },
    { id: 27, title: "Modelo #27", img: "WhatsApp Image 2026-07-23 at 13.35.06.jpeg" },
    { id: 28, title: "Modelo #28", img: "WhatsApp Image 2026-07-23 at 13.35.07.jpeg" },
    { id: 29, title: "Modelo #29", img: "WhatsApp Image 2026-07-23 at 13.35.09.jpeg" },
    { id: 30, title: "Modelo #30", img: "WhatsApp Image 2026-07-23 at 14.03.05.jpeg" },
    { id: 31, title: "Modelo #31", img: "WhatsApp Image 2026-08-05 at 18.58.56 (1).jpeg" },
    { id: 32, title: "Modelo #32", img: "WhatsApp Image 2026-08-05 at 18.58.56.jpeg" },
    { id: 33, title: "Modelo #33", img: "WhatsApp Image 2026-08-05 at 18.58.57.jpeg" },
    { id: 34, title: "Modelo #34", img: "WhatsApp Image 2026-08-05 at 18.58.19.jpeg" },
    { id: 35, title: "Modelo #35", img: "WhatsApp Image 2026-08-05 at 18.58.20.jpeg" },
    { id: 36, title: "Modelo #36", img: "WhatsApp Image 2026-08-05 at 18.58.21.jpeg" },
    { id: 37, title: "Modelo #37", img: "WhatsApp Image 2026-08-05 at 18.58.22.jpeg" },
    { id: 38, title: "Modelo #38", img: "WhatsApp Image 2026-08-05 at 18.58.28.jpeg" },
    { id: 39, title: "Modelo #39", img: "WhatsApp Image 2026-08-05 at 18.58.28 (1).jpeg" },
    { id: 40, title: "Modelo #40", img: "WhatsApp Image 2026-08-05 at 18.58.29.jpeg" },
    { id: 41, title: "Modelo #41", img: "WhatsApp Image 2026-08-05 at 18.58.30.jpeg" },
    { id: 42, title: "Modelo #42", img: "WhatsApp Image 2026-08-05 at 18.58.31 (1).jpeg" },
    { id: 43, title: "Modelo #43", img: "WhatsApp Image 2026-08-05 at 18.58.31.jpeg" },
    { id: 44, title: "Modelo #44", img: "WhatsApp Image 2026-08-05 at 18.58.31 (2).jpeg" },
    { id: 45, title: "Modelo #45", img: "WhatsApp Image 2026-08-05 at 18.58.32.jpeg" },
    { id: 46, title: "Modelo #46", img: "WhatsApp Image 2026-08-05 at 18.58.32 (1).jpeg" },
    { id: 47, title: "Modelo #47", img: "WhatsApp Image 2026-08-05 at 18.58.32 (2).jpeg" },
    { id: 48, title: "Modelo #48", img: "WhatsApp Image 2026-08-05 at 18.58.33.jpeg" },
    { id: 49, title: "Modelo #49", img: "WhatsApp Image 2026-08-05 at 18.58.33 (1).jpeg" },
    { id: 50, title: "Modelo #50", img: "WhatsApp Image 2026-08-05 at 18.58.33 (2).jpeg" },
    { id: 51, title: "Modelo #51", img: "WhatsApp Image 2026-08-05 at 18.58.34.jpeg" },
    { id: 52, title: "Modelo #52", img: "WhatsApp Image 2026-08-05 at 18.58.58.jpeg" },
    { id: 53, title: "Modelo #53", img: "WhatsApp Image 2026-08-06 at 12.06.46.jpeg" },
    { id: 54, title: "Modelo #54", img: "WhatsApp Image 2026-08-06 at 12.06.47 (1).jpeg" },
    { id: 55, title: "Modelo #55", img: "WhatsApp Image 2026-08-06 at 12.06.47.jpeg" },
    { id: 56, title: "Modelo #56", img: "WhatsApp Image 2026-08-06 at 12.06.48.jpeg" },
    { id: 57, title: "Modelo #57", img: "WhatsApp Image 2026-10-29 at 16.45.18 (1).jpeg" },
    { id: 58, title: "Modelo #58", img: "WhatsApp Image 2026-10-29 at 16.45.18 (2).jpeg" },
    { id: 59, title: "Modelo #59", img: "WhatsApp Image 2026-10-29 at 16.45.20 (1).jpeg" },
    { id: 60, title: "Modelo #60", img: "WhatsApp Image 2026-10-29 at 16.45.20.jpeg" },
    { id: 61, title: "Modelo #61", img: "WhatsApp Image 2026-10-29 at 16.45.20 (2).jpeg" },
    { id: 62, title: "Modelo #62", img: "WhatsApp Image 2026-10-29 at 16.45.21.jpeg" },
    { id: 63, title: "Modelo #63", img: "WhatsApp Image 2026-10-29 at 16.45.21 (1).jpeg" },
    { id: 64, title: "Modelo #64", img: "WhatsApp Image 2026-10-29 at 16.45.22.jpeg" },
    { id: 65, title: "Modelo #65", img: "WhatsApp Image 2026-10-29 at 16.45.23 (1).jpeg" },
    { id: 66, title: "Modelo #66", img: "WhatsApp Image 2026-10-29 at 16.45.23.jpeg" },
    { id: 67, title: "Modelo #67", img: "WhatsApp Image 2026-10-29 at 16.45.23 (2).jpeg" },
    { id: 68, title: "Modelo #68", img: "WhatsApp Image 2026-10-29 at 16.45.21 (2).jpeg" },
    { id: 69, title: "Modelo #69", img: "WhatsApp Image 2026-10-29 at 16.45.19.jpeg" },
    { id: 70, title: "Modelo #70", img: "WhatsApp Image 2026-10-29 at 16.45.19 (1).jpeg" },
    { id: 71, title: "Modelo #71", img: "WhatsApp Image 2026-10-29 at 16.45.22 (1).jpeg" },
    { id: 72, title: "Modelo #72", img: "WhatsApp Image 2026-10-29 at 16.45.22 (2).jpeg" },
    { id: 73, title: "Modelo #73", img: "WhatsApp Image 2026-10-29 at 16.45.23 (3).jpeg" }
];
// Función para renderizar la galería con paginación
function renderGallery() {
    galleryContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = imagesList.slice(startIndex, endIndex);

    paginatedItems.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('gallery-card');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('card-img-wrapper');

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.title;
        img.loading = "lazy";

        imgContainer.appendChild(img);

        const info = document.createElement('div');
        info.classList.add('card-info');

        const title = document.createElement('h3');
        title.innerText = item.title;

        const btn = document.createElement('button');
        btn.classList.add('btn-consultar');
        btn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Consultar';

        info.appendChild(title);
        info.appendChild(btn);

        card.appendChild(imgContainer);
        card.appendChild(info);

        // Evento Zoom Modal
        card.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImg.src = item.img;
            captionText.innerText = item.title;
            
            const textMessage = encodeURIComponent(`Hola! Me interesa consultar por el ${item.title} del catálogo web.`);
            modalWaBtn.href = `https://wa.me/${phoneNumber}?text=${textMessage}`;
        });

        galleryContainer.appendChild(card);
    });

    renderPaginationControls();
}

// Crear los controles de paginación automáticamente
function renderPaginationControls() {
    let paginationDiv = document.getElementById('pagination-controls');
    
    if (!paginationDiv) {
        paginationDiv = document.createElement('div');
        paginationDiv.id = 'pagination-controls';
        paginationDiv.style.cssText = "display: flex; justify-content: center; align-items: center; gap: 15px; margin: 30px 0; width: 100%;";
        galleryContainer.after(paginationDiv);
    }

    const totalPages = Math.ceil(imagesList.length / itemsPerPage);

    paginationDiv.innerHTML = `
        <button id="btnPrev" ${currentPage === 1 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''} style="padding: 10px 20px; background-color: #222; color: #fff; border: 1px solid #ffb703; border-radius: 6px; cursor: pointer;">← Anterior</button>
        <span style="color: #fff; font-weight: bold;">Página ${currentPage} de ${totalPages}</span>
        <button id="btnNext" ${currentPage >= totalPages ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''} style="padding: 10px 20px; background-color: #222; color: #fff; border: 1px solid #ffb703; border-radius: 6px; cursor: pointer;">Siguiente →</button>
    `;

    document.getElementById('btnPrev').onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderGallery();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    document.getElementById('btnNext').onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderGallery();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
}

// Cerrar Modal
closeModal.addEventListener('click', () => { modal.style.display = "none"; });
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = "none"; });

// Inicializar galería por primera vez
renderGallery();
